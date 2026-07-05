import { usePageMeta } from '../hooks/usePageMeta'

export function MaintenancePage() {
  usePageMeta({
    title: 'Soli Club | Under construction',
    description: 'Soli Club is currently under construction. A nerd is currently working on it 🤓.',
  })

  return (
    <main className="maintenance-page">
      <section className="maintenance-card">
        <p className="eyebrow">Soli Club is offline</p>
        <h2>Under construction!</h2>
        <p className="maintenance-description" margin-top="3rem">
          Soli Club is a Helsinki-based KPOP DJ and club collective built around big choruses, fan energy, and nights that
          feel easy to join even if it is your first time out.
        </p>
        <br />
          <p className="maintenance-copy">
          A nerd 🤓 is working on the website <span className="maintenance-domain">soliclub.fi</span>.
          The preview environment is available to staff/members.
        </p>
        <p className="maintenance-note">KPOP lovers, come back soon for the full club site &lt;3</p>
      </section>
    </main>
  )
}
