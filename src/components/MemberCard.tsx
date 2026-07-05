import type { CSSProperties } from 'react'
import { useState } from 'react'
import type { Member } from '../data/site'

type MemberCardProps = {
  member: Member
  variant?: 'compact' | 'about'
}

export function MemberCard({ member, variant = 'compact' }: MemberCardProps) {
  const isAbout = variant === 'about'
  const [imageFailed, setImageFailed] = useState(false)
  const hasImage = Boolean(member.photoUrl) && !imageFailed

  return (
    <article className="member-card" style={{ '--member-accent': member.accentColor } as CSSProperties}>
      {hasImage ? (
        <img
          className="member-photo"
          src={member.photoUrl}
          alt={`${member.name} portrait`}
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="member-avatar" aria-hidden="true">
          {member.name.slice(0, 1)}
        </div>
      )}
      <div>
        <p className="member-role">{member.role}</p>
        <h2>{member.name}</h2>
        <p>{member.aboutMe}</p>
        {isAbout ? <p className="member-specialty"> Specialty: {member.specialty}</p> : null}
        <span>{isAbout ? member.personalityType : member.songLabel}</span>

      </div>
    </article>
  )
}
