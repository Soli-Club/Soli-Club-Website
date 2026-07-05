import type { FormEvent } from 'react'
import { LockKeyhole } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'

export function AdminPage() {
  usePageMeta({
    title: 'Admin | Soli Club',
    description: 'Soli Club admin login for events, members, tracks, and site content.',
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section className="admin-page">
      <div className="admin-login">
        <div className="admin-icon" aria-hidden="true">
          <LockKeyhole size={24} />
        </div>
        <p className="eyebrow">Admin</p>
        <h1>DJ booth control room.</h1>
        <form className="soli-form compact-form" onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            <span>Password</span>
            <input name="password" type="password" autoComplete="current-password" required />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    </section>
  )
}
