export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="section-header-wrap">
      <div className="cs-section-eyebrow">{eyebrow}</div>

      <div className="cs-section-title">{title}</div>

      {subtitle && <div className="cs-section-subtitle">{subtitle}</div>}
    </div>
  );
}
