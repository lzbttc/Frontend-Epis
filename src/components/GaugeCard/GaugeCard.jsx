import './GaugeCard.css'

function GaugeCard({ value, label, percentage = 85, color = '#1d4ed8' }) {
  const radius = 36
  const stroke = 7
  const normalizedRadius = radius - stroke * 0.5
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="gauge-card">
      <div className="gauge-card__visual">
        <svg height={radius * 2} width={radius * 2} className="gauge-card__svg">
          <circle
            stroke="#e2e8f0"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="gauge-card__progress"
          />
        </svg>
        <div className="gauge-card__value-wrapper">
          <span className="gauge-card__value">{value}</span>
        </div>
      </div>
      <span className="gauge-card__label">{label}</span>
    </div>
  )
}

export default GaugeCard
