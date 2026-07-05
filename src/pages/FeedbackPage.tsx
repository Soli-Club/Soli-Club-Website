import type { FormEvent } from 'react'
import { PageHeader } from '../components/PageHeader'
import { events } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function FeedbackPage() {
  usePageMeta({
    title: 'Feedback | Soli Club',
    description: 'Share post-event feedback with Soli Club after a KPOP night, pop-up, collab, festival slot, or Pride set.',
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <>
      <PageHeader eyebrow="Post-event feedback" title="Tell us what hit, what missed, what helped.">
        <p>
          Pick the event, rate the night, and leave whatever context feels useful. Setlist wishes, safety notes, access
          details, tiny joys: all welcome.
        </p>
      </PageHeader>

      <section className="form-layout single-column">
        <form className="soli-form" onSubmit={handleSubmit}>
          <label>
            <span>Event</span>
            <select name="eventId" defaultValue="" required>
              <option value="" disabled>
                Pick an event
              </option>
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Rating</span>
            <select name="rating" defaultValue="" required>
              <option value="" disabled>
                Pick one
              </option>
              <option value="5">5 - replay it tomorrow</option>
              <option value="4">4 - very good night</option>
              <option value="3">3 - mixed but fun</option>
              <option value="2">2 - needs care</option>
              <option value="1">1 - please follow up</option>
            </select>
          </label>
          <label className="full-span">
            <span>Comment</span>
            <textarea name="comment" rows={8} />
          </label>
          <label className="full-span">
            <span>Email, only if you want a reply</span>
            <input name="contactEmail" type="email" autoComplete="email" />
          </label>
          <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
          <button type="submit">Send feedback</button>
        </form>
      </section>
    </>
  )
}
