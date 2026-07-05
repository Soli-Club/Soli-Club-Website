import { MemberCard } from '../components/MemberCard'
import { PageHeader } from '../components/PageHeader'
import { genreTags, members } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function AboutPage() {
  usePageMeta({
    title: 'About | Soli Club',
    description: 'Meet Soli Club, the Helsinki collective playing KPOP club nights, pop-ups, festivals, Pride stages, and collabs.',
  })

  return (
    <>
      <PageHeader eyebrow="About Soli" title="Sound for the whole room.">
        <p>
          Soli Club is a Helsinki-based KPOP DJ and club collective built around big choruses, fan energy, and nights that
          feel easy to join even if it is your first time out.
        </p>
      </PageHeader>

      <section className="content-grid">
        <article className="text-panel">
          <p className="eyebrow">Story</p>
          <h2>From club nights to daytime pop-ups.</h2>
          <p>
            The collective runs KPOP nights across generations of boy groups and girl groups, then opens the door wider
            for JPOP, anisong, vinahouse, and R&B when guest DJs step in. Some nights are full club takeovers; some are
            coffee-shop pop-ups, festival slots, or artist-anniversary specials.
          </p>
        </article>

        <article className="text-panel">
          <p className="eyebrow">Community</p>
          <h2>Come loud, keep it kind.</h2>
          <p>
            Soli nights are for singing, dancing, trading favorite eras, and giving people space. Consent, respect, and
            looking after each other are part of the setlist.
          </p>
        </article>
      </section>

      <section className="section-band">
        <div className="section-heading">
          <p className="eyebrow">Genres</p>
          <h2>Bubblegum pop energy, festival-volume hooks.</h2>
        </div>
        <div className="tag-cloud">
          {genreTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="section-band" id="members">
        <div className="section-heading">
          <p className="eyebrow">Roster</p>
          <h2>The tracklist rail pulls from this same member data.</h2>
        </div>
        <div className="roster-grid">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} variant="about" />
          ))}
        </div>
      </section>
    </>
  )
}
