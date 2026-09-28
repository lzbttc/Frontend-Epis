import GaugeCard from '../../components/GaugeCard/GaugeCard'
import DisciplineCard from '../../components/DisciplineCard/DisciplineCard'
import EventCard from '../../components/EventCard/EventCard'
import QuickActionCard from '../../components/QuickActionCard/QuickActionCard'
import NewsCard from '../../components/NewsCard/NewsCard'
import Button from '../../components/Button/Button'
import { studentMock } from '../../mocks/studentMock'
import './PaginaInicial.css'

function PaginaInicial() {
  const {
    student,
    metrics,
    disciplines,
    upcomingEvents,
    quickActions,
    latestNews,
  } = studentMock

  return (
    <div className="pagina-inicial">
      {/* 1. Greeting & Academic Status Banner */}
      <section className="pagina-inicial__banner">
        <div className="pagina-inicial__greeting">
          <span className="pagina-inicial__badge">Portal Acadêmico</span>
          <h1 className="pagina-inicial__title">
            Boa tarde, {student.name.split(' ')[0]}!
          </h1>
          <p className="pagina-inicial__subtitle">
            Acompanhe suas disciplinas, notas, prazos e mantenha sua jornada
            acadêmica sempre em dia.
          </p>
        </div>

        <div className="pagina-inicial__gauges">
          {metrics.map((metric) => (
            <GaugeCard
              key={metric.id}
              value={metric.value}
              label={metric.label}
              percentage={metric.percentage}
              color={metric.color}
            />
          ))}
        </div>
      </section>

      {/* 2. Minhas Disciplinas Section */}
      <section className="pagina-inicial__section">
        <header className="pagina-inicial__section-header">
          <div>
            <h2 className="pagina-inicial__section-title">
              Minhas Disciplinas
            </h2>
            <p className="pagina-inicial__section-subtitle">
              Acompanhamento e acesso ao conteúdo das turmas virtuais
            </p>
          </div>
          <Button variant="outline" size="sm">
            Ver todas
          </Button>
        </header>

        <div className="pagina-inicial__disciplines-grid">
          {disciplines.map((discipline) => (
            <DisciplineCard key={discipline.id} discipline={discipline} />
          ))}
        </div>
      </section>

      {/* 3. Compromissos & Acesso Rápido (2-Column Grid) */}
      <div className="pagina-inicial__two-col">
        {/* Left Column: Próximos compromissos (7 cols) */}
        <section className="pagina-inicial__section pagina-inicial__col-left pagina-inicial__compromissos-card">
          <header className="pagina-inicial__compromissos-header">
            <div className="pagina-inicial__compromissos-title-group">
              <div className="pagina-inicial__compromissos-icon-tile">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D4ED8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <h2 className="pagina-inicial__compromissos-title">
                  Próximos compromissos
                </h2>
                <p className="pagina-inicial__compromissos-subtitle">
                  Atividades avaliativas e sessões presenciais
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="btn--white-ghost">
              Ver agenda
            </Button>
          </header>

          <div className="pagina-inicial__events-list">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* Right Column: Acesso rápido (5 cols) */}
        <section className="pagina-inicial__section pagina-inicial__col-right pagina-inicial__acesso-rapido-card">
          <header className="pagina-inicial__acesso-rapido-header">
            <div className="pagina-inicial__acesso-rapido-title-group">
              <div className="pagina-inicial__acesso-rapido-icon-tile">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#090D16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <h2 className="pagina-inicial__acesso-rapido-title">
                  Acesso rápido
                </h2>
                <p className="pagina-inicial__acesso-rapido-subtitle">
                  Serviços acadêmicos mais requisitados
                </p>
              </div>
            </div>
          </header>

          <div className="pagina-inicial__actions-grid">
            {quickActions.map((action) => (
              <QuickActionCard key={action.id} action={action} />
            ))}
          </div>
        </section>
      </div>

      {/* 4. Últimas Notícias Section */}
      <section className="pagina-inicial__section">
        <header className="pagina-inicial__section-header">
          <div>
            <h2 className="pagina-inicial__section-title">Últimas notícias</h2>
            <p className="pagina-inicial__section-subtitle">
              Comunicados da coordenação e pró-reitoria
            </p>
          </div>
          <Button variant="ghost" size="sm">
            Ver todos
          </Button>
        </header>

        <div className="pagina-inicial__news-list">
          {latestNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default PaginaInicial
