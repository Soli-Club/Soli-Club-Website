import { CalendarDays, MapPin, Ticket } from 'lucide-react'
import type { DemoEvent } from '../data/site'

type EventCardProps = {
  event: DemoEvent
}

export function EventCard({ event }: EventCardProps) {
  const date = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${event.eventDate}T12:00:00`))

  return (
    <article className={event.isFeatured ? 'event-card event-card-featured' : 'event-card'}>
      <div className="event-date">
        <span>{date}</span>
        {event.startTime ? <span>{event.startTime}</span> : null}
      </div>
      <div className="event-card-body">
        <p className="event-category">{event.category.replace('_', ' ')}</p>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <dl className="event-meta">
          <div>
            <MapPin aria-hidden="true" size={16} />
            <dt>Where</dt>
            <dd>{event.locationName}</dd>
          </div>
          <div>
            <Ticket aria-hidden="true" size={16} />
            <dt>Tickets</dt>
            <dd>{event.ticketPrice}</dd>
          </div>
          <div>
            <CalendarDays aria-hidden="true" size={16} />
            <dt>Age</dt>
            <dd>{event.ageRestriction}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
