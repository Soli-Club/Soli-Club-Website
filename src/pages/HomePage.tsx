import { DjBoothPreview } from '../components/DjBoothPreview'
import { EventCard } from '../components/EventCard'
import { events, genreTags } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  usePageMeta({
    title: 'Soli Club | KPOP club nights in Helsinki',
    description: 'Soli Club is a Helsinki KPOP DJ collective for all-gens club nights, pop-ups, collabs, and bright dancefloor moments.',
  })

  const featuredEvent = events.find((event) => event.isFeatured)

  return (
    <>
      <DjBoothPreview />

      <section className="section-band">
        <div className="section-heading">
          <p className="eyebrow">What is in the crate</p>
          <h2>All-gens KPOP with room for shiny detours.</h2>
        </div>
        <div className="tag-cloud" aria-label="Genres">
          {genreTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      {featuredEvent ? (
        <section className="section-band">
          <div className="section-heading">
            <p className="eyebrow">Next up</p>
            <h2>Bring your friends, check the door info, keep the floor kind.</h2>
          </div>
          <EventCard event={featuredEvent} />
        </section>
      ) : null}
    </>
  )
}
