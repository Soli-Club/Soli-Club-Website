import { EventCard } from '../components/EventCard'
import { PageHeader } from '../components/PageHeader'
import { events } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function EventsPage() {
  usePageMeta({
    title: 'Events | Soli Club',
    description: 'Upcoming and past Soli Club KPOP nights, pop-ups, Pride sets, festival slots, and collabs in Helsinki.',
  })

  const upcomingEvents = events.filter((event) => event.status === 'upcoming')
  const pastEvents = events.filter((event) => event.status === 'past')

  return (
    <>
      <PageHeader eyebrow="Calendar" title="Door times, age limits, ticket notes.">
        <p>
          Upcoming nights land here with the practical details first. Nothing on the calendar yet? Follow @club.soli so
          you do not miss the next one.
        </p>
      </PageHeader>

      <section className="section-band">
        <div className="section-heading">
          <p className="eyebrow">Upcoming</p>
          <h2>Posted nights</h2>
        </div>
        <div className="event-list">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="section-heading">
          <p className="eyebrow">Past</p>
          <h2>Recently in the booth</h2>
        </div>
        <div className="event-list event-list-compact">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </>
  )
}
