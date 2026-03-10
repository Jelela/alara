// Configuración del proyecto - actualizar con datos reales
export const config = {
  whatsapp: {
    // +598 95 078 890
    number: "59895078890",
    defaultMessage:
      "Hola, me interesa conocer más sobre Alara",
    /** Mensaje al coordinar visita por unidad. {numero} se reemplaza por el id de la casa (ej. 002). */
    visitMessageTemplate:
      "¡Hola! Me interesaría coordinar una visita para la casa {numero}",
  },
  googleMaps: {
    url: "https://maps.app.goo.gl/z17RxY81ixq2vQYaA",
  },
} as const;

export function getWhatsAppVisitUrl(unitId: string): string {
  const message = config.whatsapp.visitMessageTemplate.replace("{numero}", unitId);
  return `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
