import type { FormEvent } from 'react'
import { PageHeader } from '../components/PageHeader'
import { SocialLinks } from '../components/SocialLinks'
import { usePageMeta } from '../hooks/usePageMeta'

export function ContactPage() {
  usePageMeta({
    title: 'Contact | Soli Club',
    description: 'Contact Soli Club for fan notes, press, general questions, and Helsinki KPOP club night details.',
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Questions, press, fan notes.">
        <p>
          Send the note here if it is not a booking inquiry. Include the event name if you are asking about a specific
          night.
        </p>
      </PageHeader>

      <section className="form-layout">
        <form className="soli-form compact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="full-span">
            <span>Message</span>
            <textarea name="message" rows={8} required />
          </label>
          <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
          <button type="submit">Send message</button>
        </form>

        <aside className="side-note">
          <p className="eyebrow">Also here</p>
          <h2>Follow the next drop.</h2>
          <p>Event posts, last-minute notes, and set energy live on socials first.</p>
          <SocialLinks />
        </aside>
      </section>
    </>
  )
}
