import './GaugeCard.css'

function GaugeCard({ value, label, percentage = 85, color = '#3b82f6' }) {
  const radius = 50
  const stroke = 10
  const normalizedRadius = radius - stroke * 0.5
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="gauge-card">
      <div className="gauge-card__visual">
        <svg height={radius * 2} width={radius * 2} className="gauge-card__svg">
          <circle
            stroke="#F5F2EA"
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
          <span className="gauge-card__label">{label}</span>
        </div>
      </div>
    </div>
  )
}

export default GaugeCard
