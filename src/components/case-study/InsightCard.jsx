export default function InsightCard({ category, finding, source, expansion }) {
  return (
    <div className="insight-card">
      <div className="insight-cat">{category}</div>

      <div className="insight-finding">{finding}</div>

      <div className="insight-source">{source}</div>

      {expansion && <div className="insight-expansion">{expansion}</div>}
    </div>
  );
}
