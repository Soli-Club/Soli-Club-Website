import type { CSSProperties } from 'react'
import type { Member } from '../data/site'

type MemberCardProps = {
  member: Member
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="member-card" style={{ '--member-accent': member.accentColor } as CSSProperties}>
      <div className="member-avatar" aria-hidden="true">
        {member.name.slice(0, 1)}
      </div>
      <div>
        <p className="member-role">{member.role}</p>
        <h2>{member.name}</h2>
        <p>{member.aboutMe}</p>
        <span>{member.songLabel}</span>
      </div>
    </article>
  )
}
