import { Camera, Music2 } from 'lucide-react'
import { socialLinks } from '../data/site'

const socialIcons = {
  instagram: Camera,
  tiktok: Music2,
}

type SocialLinksProps = {
  compact?: boolean
}

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <ul className={compact ? 'social-links social-links-compact' : 'social-links'}>
      {socialLinks.map((social) => {
        const Icon = socialIcons[social.icon]

        return (
          <li key={social.name}>
            <a href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.name} ${social.handle}`}>
              <Icon aria-hidden="true" size={18} strokeWidth={2.2} />
              <span>{compact ? social.name : social.handle}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
