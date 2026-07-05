import type { FormEvent } from 'react'
import { PageHeader } from '../components/PageHeader'
import { SocialLinks } from '../components/SocialLinks'
import { usePageMeta } from '../hooks/usePageMeta'

export function BusinessPage() {
  usePageMeta({
    title: 'Business | Soli Club',
    description: 'Book Soli Club for venues, festivals, brand events, pop-ups, coffee shops, Pride stages, and DJ collabs.',
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <>
      <PageHeader eyebrow="Bookings and collabs" title="Bring Soli to your room.">
        <p>
          Venues, festivals, coffee shops, brands, student groups, and other DJs can send the practical notes here:
          dates, location, age policy, budget range, and the kind of crowd you are building for.
        </p>
      </PageHeader>

      <section className="form-layout">
        <form className="soli-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            <span>Organization</span>
            <input name="organization" autoComplete="organization" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            <span>Event type</span>
            <select name="eventType" defaultValue="">
              <option value="" disabled>
                Pick one
              </option>
              <option>Club night</option>
              <option>Festival</option>
              <option>Pop-up</option>
              <option>Brand collab</option>
              <option>Guest DJ swap</option>
            </select>
          </label>
          <label className="full-span">
            <span>Message</span>
            <textarea name="message" rows={7} required />
          </label>
          <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
          <button type="submit">Send inquiry</button>
        </form>

        <aside className="side-note">
          <p className="eyebrow">Socials</p>
          <h2>DMs work too.</h2>
          <p>For quick checks or poster shares, Soli is easiest to reach where the next night is already being posted.</p>
          <SocialLinks />
        </aside>
      </section>
    </>
  )
}
