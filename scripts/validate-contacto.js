#!/usr/bin/env node
/**
 * Valida que:
 * 1. La página /contacto existe (src/app/contacto/page.tsx)
 * 2. Ningún componente de la home enlaza directo a wa.me (todos deben ir a /contacto)
 * 3. Solo la página contacto y config usan wa.me (para el mensaje al elegir unidad)
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP = path.join(ROOT, "src");

let hasError = false;

// 1. Página contacto existe
const contactPage = path.join(APP, "app", "contacto", "page.tsx");
if (!fs.existsSync(contactPage)) {
  console.error("❌ Falta la página de contacto: src/app/contacto/page.tsx");
  hasError = true;
} else {
  console.log("✓ Página /contacto existe (src/app/contacto/page.tsx)");
}

// 2. Archivos que NO deben tener wa.me (enlaces directos a WhatsApp desde la home)
const noWaMeFiles = [
  "src/components/Header.tsx",
  "src/components/Footer.tsx",
  "src/components/WhatsAppButton.tsx",
  "src/components/UnitsSection.tsx",
  "src/app/page.tsx",
];

for (const file of noWaMeFiles) {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, "utf8");
  if (content.includes("wa.me") || content.includes("getWhatsAppUrl()")) {
    console.error(`❌ ${file} todavía enlaza a WhatsApp directo (wa.me o getWhatsAppUrl). Debe usar href="/contacto"`);
    hasError = true;
  } else if (content.includes('href="/contacto"') || content.includes("href=\"/contacto\"")) {
    console.log(`✓ ${file} enlaza a /contacto`);
  } else {
    console.warn(`⚠ ${file} no tiene enlace a /contacto (revisar si es necesario)`);
  }
}

// 3. config.ts debe tener getWhatsAppVisitUrl (para la página contacto)
const configPath = path.join(APP, "lib", "config.ts");
if (fs.existsSync(configPath)) {
  const config = fs.readFileSync(configPath, "utf8");
  if (!config.includes("getWhatsAppVisitUrl")) {
    console.error("❌ src/lib/config.ts no define getWhatsAppVisitUrl");
    hasError = true;
  } else {
    console.log("✓ config.ts tiene getWhatsAppVisitUrl para la página contacto");
  }
}

if (hasError) {
  process.exit(1);
}
console.log("\n✅ Validación OK: enlaces a /contacto y página contacto correctos.");
console.log("   Para probar: npm run dev y abrir http://localhost:3000/contacto");
process.exit(0);
