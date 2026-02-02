import { SectionImage } from "./SectionImage";

interface ContentSectionProps {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
}

export function ContentSection({
  id,
  title,
  content,
  imageSrc,
  imageAlt,
  imageFirst = true,
}: ContentSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            imageFirst ? "" : "lg:grid-flow-dense"
          }`}
        >
          <div className={imageFirst ? "" : "lg:col-start-2"}>
            <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-lg overflow-hidden bg-stone-200">
              <SectionImage
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0"
              />
            </div>
          </div>
          <div className={imageFirst ? "" : "lg:col-start-1 lg:row-start-1"}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-6">
              {title}
            </h2>
            <p className="text-stone-600 leading-relaxed whitespace-pre-line">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
