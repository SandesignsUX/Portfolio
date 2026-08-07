export default function MetricStrip({ metrics }) {
  return (
    <div className="metric-strip">
      {metrics.map((metric) => (
        <div key={metric.label} className="metric-item">
          <div className="metric-val">{metric.value}</div>

          <div className="metric-lbl">{metric.label}</div>

          <div className="metric-context">{metric.context}</div>
        </div>
      ))}
    </div>
  );
}
