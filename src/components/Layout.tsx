import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { navItems } from '../data/site'
import { NightSky } from './NightSky'
import { SocialLinks } from './SocialLinks'

export function Layout() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="site-shell">
      <NightSky />
      <header className="site-header">
        <NavLink className="wordmark" to="/" onClick={() => setIsOpen(false)}>
          <span className="wordmark-mark" aria-hidden="true">
            SOLI
          </span>
          <span className="wordmark-copy">Soli Club</span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-socials">
          <SocialLinks compact />
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </header>

      <div className={isOpen ? 'mobile-menu is-open' : 'mobile-menu'} id="mobile-menu">
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <SocialLinks />
      </div>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <span className="footer-kicker">KPOP club nights from Helsinki</span>
          <p>All gens, all choruses, clear house rules, and room for the whole dancefloor.</p>
        </div>
        <SocialLinks />
      </footer>
    </div>
  )
}
