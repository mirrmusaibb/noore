import type { ProductImage as ProductImageType, ProductCategory } from "@/types/commerce";

export function ProductImage({ image, category, className = "" }: {
  image: ProductImageType;
  category: ProductCategory;
  className?: string;
}) {
  return (
    <div className={`product-image ${className} tone-${category}`}>
      <div className={`image-art image-art-${image.composition}`} role="img" aria-label={image.alt} style={{ "--art-cloth": image.palette } as React.CSSProperties}>
        <svg className="image-art-svg" viewBox="0 0 800 1000" aria-hidden="true" focusable="false">
          <circle className="art-orbit" cx="400" cy="480" r="285" />
          <circle className="art-orbit art-orbit-inner" cx="400" cy="480" r="245" />
          {image.composition === "drape" ? <g className="art-drape">
            <path className="art-cloth" d="M238 180c78-53 197-43 271 19 91 77 110 203 54 302-44 77-68 136-44 222 14 51 43 102 77 148-108-21-233-69-316-151-82-81-118-184-91-303 16-72 46-146 49-237z" />
            <path className="art-fold" d="M257 214c-34 102-72 207-35 318 35 105 124 185 225 258" />
            <path className="art-fold art-fold-soft" d="M307 176c-27 107-21 212 33 307 43 76 102 135 171 190" />
            <path className="art-fold" d="M391 171c10 116 58 199 126 270" />
            <path className="art-botanical-stem" d="M379 719c10-77 20-148 71-214" />
            <g className="art-blossom" transform="translate(453 500)"><ellipse cy="-22" rx="13" ry="24" /><ellipse cy="-22" rx="13" ry="24" transform="rotate(45)" /><ellipse cy="-22" rx="13" ry="24" transform="rotate(90)" /><ellipse cy="-22" rx="13" ry="24" transform="rotate(135)" /><circle r="10" /></g>
          </g> : <g className="art-bloom">
            <path className="art-botanical-stem" d="M400 827c-16-117 7-222 0-322-5-74-35-139-66-207" />
            <path className="art-leaf" d="M363 665c-89 7-131-40-145-118 73 5 124 38 145 118z" />
            <path className="art-leaf-line" d="M232 553c55 34 94 67 131 112" />
            <path className="art-leaf art-leaf-right" d="M403 603c83-3 126-49 140-125-74 9-121 47-140 125z" />
            <path className="art-leaf-line" d="M540 478c-51 39-97 73-137 125" />
            <g className="art-large-blossom" transform="translate(400 369)">
              <ellipse cy="-88" rx="40" ry="92" /><ellipse cy="-88" rx="40" ry="92" transform="rotate(45)" /><ellipse cy="-88" rx="40" ry="92" transform="rotate(90)" /><ellipse cy="-88" rx="40" ry="92" transform="rotate(135)" /><circle r="34" />
            </g>
            <g className="art-stamen"><path d="M400 369l-27-74m27 74-2-86m2 86 22-82m-22 82 48-68m-48 68-57-61m57 61 67-37" /><circle cx="373" cy="295" r="7" /><circle cx="398" cy="283" r="7" /><circle cx="422" cy="287" r="7" /><circle cx="448" cy="301" r="7" /><circle cx="343" cy="308" r="7" /><circle cx="467" cy="332" r="7" /></g>
          </g>}
          <path className="art-baseline" d="M170 875h460" />
          <path className="art-diamond" d="m160 875 10-10 10 10-10 10zM620 875l10-10 10 10-10 10z" />
        </svg>
        <span className="image-art-kicker">NOORE · {image.composition === "drape" ? "TEXTILE STUDY" : "BOTANICAL STUDY"}</span>
      </div>
      <span className="image-caption">Artwork placeholder</span>
    </div>
  );
}
