import { Pause, Play } from 'lucide-react'
import type { CSSProperties } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { members } from '../data/site'

export function DjBoothPreview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const activeMember = members[activeIndex]

  function selectNextMember() {
    setActiveIndex((current) => (current + 1) % members.length)
    setIsPlaying(true)
  }

  return (
    <section className="dj-booth" style={{ '--active-accent': activeMember.accentColor } as CSSProperties}>
      <div className="booth-copy">
        <p className="eyebrow">Helsinki KPOP club collective</p>
        <h1>Soli Club</h1>
        <p>KPOP, JPOP, anisong, vinahouse, R&B edits, and a night sky full of choruses.</p>
      </div>

      <div className="booth-scene" aria-label="Soli Club DJ booth">
        <button className="mascot-button" type="button" onClick={selectNextMember}>
          <img src="/assets/mascot/bitmap.png" alt="Pixel mascot at the DJ booth" />
          <span>Next member</span>
        </button>

        <div className="deck-zone">
          <div className={isPlaying ? 'record is-spinning' : 'record'} aria-hidden="true">
            <span />
          </div>
          <button
            className="needle-button"
            type="button"
            aria-pressed={!isPlaying}
            onClick={() => setIsPlaying((current) => !current)}
          >
            {isPlaying ? <Pause aria-hidden="true" size={18} /> : <Play aria-hidden="true" size={18} />}
            <span>{isPlaying ? 'Pause track' : 'Play track'}</span>
          </button>
          <img className="deck-asset" src="/assets/decks/deck-placeholder.svg" alt="" aria-hidden="true" />
        </div>
      </div>

      <div className="track-panel">
        <div className="member-now">
          <p className="eyebrow">Now loaded</p>
          <h2>{activeMember.name}</h2>
          <p> About: {activeMember.aboutMe}</p>
          <br />
          <p className="eyebrow">
            Current Song of the moment: {activeMember.songLabel}
          </p>
          <Link className="more-info-button" to="/about#members">
            More about the members
          </Link>
        </div>

        <div className="track-rail" aria-label="Member tracklist">
          {members.map((member, index) => (
            <button
              key={member.id}
              className={index === activeIndex ? 'track-line active' : 'track-line'}
              type="button"
              style={{ '--member-accent': member.accentColor } as CSSProperties}
              aria-pressed={index === activeIndex}
              onClick={() => {
                setActiveIndex(index)
                setIsPlaying(true)
              }}
            >
              <span>{String(member.displayOrder).padStart(2, '0')}</span>
              <strong>{member.name}</strong>
              <em>{member.songLabel}</em>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
