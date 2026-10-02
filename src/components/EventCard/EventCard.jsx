import './EventCard.css'

function EventCard({ event }) {
  const { dateDay, dateMonth, title, topic, time, location } = event

  return (
    <div className="event-card">
      <div className="event-card__date">
        <span className="event-card__day">{dateDay}</span>
        <span className="event-card__month">{dateMonth}</span>
      </div>

      <div className="event-card__content">
        <h4 className="event-card__title">{title}</h4>
        <p className="event-card__topic">{topic}</p>
        <div className="event-card__meta">
          <span className="event-card__time">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {time}
          </span>
          <span className="event-card__bullet">•</span>
          <span className="event-card__location">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location}
          </span>
        </div>
      </div>

      <div className="event-card__action">
        <button type="button" className="event-card__btn-dark">
          Ver detalhes
        </button>
      </div>
    </div>
  )
}

export default EventCard
