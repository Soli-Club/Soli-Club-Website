export type SocialLink = {
  name: string
  handle: string
  href: string
  icon: 'instagram' | 'tiktok'
}

export type Member = {
  id: string
  name: string
  role: string
  photoUrl?: string
  aboutMe: string
  accentColor: string
  spotifyUri: string
  songLabel: string
  displayOrder: number
}

export type EventCategory = 'club_night' | 'festival' | 'collab' | 'pride' | 'pop_up'

export type DemoEvent = {
  id: string
  title: string
  description: string
  eventDate: string
  startTime?: string
  endTime?: string
  locationName: string
  locationAddress?: string
  ticketPrice: string
  ticketUrl?: string
  ageRestriction: string
  category: EventCategory
  isFeatured?: boolean
  status: 'upcoming' | 'past'
}

export const accentPalette = [
  '#FF6FB0',
  '#B79CFF',
  '#6FE1FF',
  '#6FFFC8',
  '#FFD36F',
  '#FF8F70',
  '#8C9CFF',
  '#FF6F87',
] as const

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Business', href: '/business' },
  { label: 'Contact', href: '/contact' },
] as const

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    handle: '@club.soli',
    href: 'https://www.instagram.com/club.soli/',
    icon: 'instagram',
  },
  {
    name: 'TikTok',
    handle: '@clubsoli',
    href: 'https://www.tiktok.com/@clubsoli',
    icon: 'tiktok',
  },
]

export const genreTags = [
  'KPOP all gens',
  'girl groups',
  'boy groups',
  'JPOP',
  'anisong',
  'vinahouse',
  'R&B edits',
  'bubblegum pop',
] as const

export const members: Member[] = [
  {
    id: 'mina',
    name: 'Mina',
    role: 'DJ',
    aboutMe: 'Bright hooks, second-gen throwbacks, and glittery peak-hour girl group runs.',
    accentColor: '#FF6FB0',
    spotifyUri: 'spotify:track:4LRPiXqCikLlN15c3yImP7',
    songLabel: "Song of the Summer '26",
    displayOrder: 1,
  },
  {
    id: 'jia',
    name: 'Jia',
    role: 'Host & DJ',
    aboutMe: 'Keeps the room warm, loud, and moving from fan chants to last-call choruses.',
    accentColor: '#B79CFF',
    spotifyUri: 'spotify:track:0V3wPSX9ygBnCm8psDIegu',
    songLabel: 'Main character bridge',
    displayOrder: 2,
  },
  {
    id: 'nori',
    name: 'Nori',
    role: 'DJ',
    aboutMe: 'Anisong detours, hyper-pop drums, and a soft spot for dramatic final choruses.',
    accentColor: '#6FE1FF',
    spotifyUri: 'spotify:track:2HRqTpkrJO5ggZyyK6NPWz',
    songLabel: 'Anime ending credits',
    displayOrder: 3,
  },
  {
    id: 'rina',
    name: 'Rina',
    role: 'DJ',
    aboutMe: 'R&B pockets, glossy remixes, and slow-burn edits before the room explodes.',
    accentColor: '#6FFFC8',
    spotifyUri: 'spotify:track:3r8RuvgbX9s7ammBn07D3W',
    songLabel: 'After-midnight reset',
    displayOrder: 4,
  },
  {
    id: 'yuna',
    name: 'Yuna',
    role: 'DJ',
    aboutMe: 'Third-gen bangers, birthday-special deep cuts, and choreo everybody remembers.',
    accentColor: '#FFD36F',
    spotifyUri: 'spotify:track:1Je1IMUlBXcx1Fz0WE7oPT',
    songLabel: 'Fan chant emergency',
    displayOrder: 5,
  },
  {
    id: 'aki',
    name: 'Aki',
    role: 'Guest DJ wrangler',
    aboutMe: 'Collab nights, vinahouse left turns, and clean handoffs between scenes.',
    accentColor: '#FF8F70',
    spotifyUri: 'spotify:track:6I3mqTwhRpn34SLVafSH7G',
    songLabel: 'Guest mix starter',
    displayOrder: 6,
  },
]

export const events: DemoEvent[] = [
  {
    id: 'girl-group-special-2026',
    title: 'Girl Group Special: Summer Reset',
    description:
      'All-gens girl group night with bubblegum hooks, dramatic bridges, and one more chorus before the lights come up.',
    eventDate: '2026-08-15',
    startTime: '22:00',
    endTime: '03:00',
    locationName: 'Kaiku',
    locationAddress: 'Kaikukatu 4, Helsinki',
    ticketPrice: '13.50 EUR presale',
    ticketUrl: 'https://instagram.com/club.soli',
    ageRestriction: '18+',
    category: 'club_night',
    isFeatured: true,
    status: 'upcoming',
  },
  {
    id: 'coffee-pop-up-2026',
    title: 'Soli Coffee Pop-Up',
    description:
      'Daytime KPOP, sweet drinks, photocard trading, and a softer playlist for a sunny Helsinki afternoon.',
    eventDate: '2026-09-06',
    startTime: '13:00',
    endTime: '17:00',
    locationName: 'Helsinki cafe TBA',
    ticketPrice: 'Free entry',
    ageRestriction: 'All ages',
    category: 'pop_up',
    status: 'upcoming',
  },
  {
    id: 'pride-stage-2026',
    title: 'Pride Park KPOP Takeover',
    description:
      'A bright festival slot for the crowd that knows every point move and brings friends into the circle.',
    eventDate: '2026-06-27',
    startTime: '18:00',
    locationName: 'Helsinki Pride Park',
    ticketPrice: 'Free',
    ageRestriction: 'All ages',
    category: 'pride',
    status: 'past',
  },
]
