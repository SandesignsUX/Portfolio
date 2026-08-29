export function CaseStudyImage({ src, alt, aspectClass, fit = "contain", placeholderIcon, placeholderText }) {
  if (!src) {
    return (
      <div className={`img-placeholder ${aspectClass}`}>
        <div className="img-ph-inner">
          {placeholderIcon && <span className="img-ph-icon">{placeholderIcon}</span>}
          {placeholderText && <div className="img-ph-desc">{placeholderText}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={`cs-image-frame ${aspectClass}`}>
      <img
        src={src}
        alt={alt}
        className={fit === "cover" ? "img-cover" : "img-contain"}
        loading="lazy"
      />
    </div>
  );
}
