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
  personalityType: string
  aboutMe: string
  specialty: string
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
    id: 'vivian',
    name: 'BIBI',
    role: 'Co-founder, DJ, Social media, everything',
    personalityType: 'INFJ',
    specialty: 'Girl groups, b-sides, 3rd/4th/5th gens, kpop mixed with other genres and remixes',
    aboutMe: 'BTS lover',
    accentColor: '#FF6FB0',
    spotifyUri: 'spotify:track:4LRPiXqCikLlN15c3yImP7',
    songLabel: "Bts shit song",
    photoUrl: 'https://ygsleyvmmvhydyfzkyiu.supabase.co/storage/v1/object/sign/Members/vivi.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYmNlN2JkZS0wZDUwLTQ1NWYtODVhOC00YWZkNzI2ODM3OTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZW1iZXJzL3ZpdmkuSlBHIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MzUyMjAzNSwiZXhwIjoxODE1MDU4MDM1fQ.sshcEflypeJ6esyyplaCpSy7oeyTGlYXQc5WI8vHUKw',
    displayOrder: 1,
  },
  {
    id: 'Mikaela',
    name: 'MIMI',
    role: 'Co-founder, Lead and Main DJ, Audio producer, music director, communications',
    personalityType: 'INFP',
    specialty: 'Mixed genres, b-sides, 4th/5th gens, nugu groups',
    aboutMe: 'Also known as Sapphire, TWICE stan',
    accentColor: '#B79CFF',
    spotifyUri: 'spotify:track:0V3wPSX9ygBnCm8psDIegu',
    songLabel: 'Twice Fancy',
    photoUrl: 'https://ygsleyvmmvhydyfzkyiu.supabase.co/storage/v1/object/sign/Members/mimi.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYmNlN2JkZS0wZDUwLTQ1NWYtODVhOC00YWZkNzI2ODM3OTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZW1iZXJzL21pbWkuSlBHIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MzUyMjE5OSwiZXhwIjoxODE1MDU4MTk5fQ.mbq-dIbkxoKEPR8BFPYw6gKhZZT9w16pt-ThJSYfzcU',
    displayOrder: 2,
  },

  {
    id: 'Tami',
    name: 'TAMI',
    role: 'Main DJ, Graphic Design, Merch designer, photographer, videographer, hypeman',
    personalityType: 'ENFP',
    specialty: '3rd/4th/5th gen, girlgroupd, anytinh kpop that sounds good to my ear, occasional ANISONG + JPOP',
    aboutMe: 'SNSD loveee',
    accentColor: '#FFD36F',
    spotifyUri: 'spotify:track:1Je1IMUlBXcx1Fz0WE7oPT',
    songLabel: 'Le sserafim something',
    photoUrl: 'https://ygsleyvmmvhydyfzkyiu.supabase.co/storage/v1/object/sign/Members/tami.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYmNlN2JkZS0wZDUwLTQ1NWYtODVhOC00YWZkNzI2ODM3OTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZW1iZXJzL3RhbWkuSlBHIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MzUyMjI2MiwiZXhwIjoxODE1MDU4MjYyfQ.zltv6QrPv6u6nHnl058lflWFOqp0V_8TqCBy3nAT5kg',
    displayOrder: 3,
  },
  {
    id: 'Lananh',
    name: 'LALA',
    role: 'Main DJ & Hypeman',
    personalityType: 'INFJ',
    specialty: '2nd gen and 3rd gen girl groups',
    aboutMe: 'SNSD love',
    accentColor: '#FF8F70',
    spotifyUri: 'spotify:track:6I3mqTwhRpn34SLVafSH7G',
    songLabel: 'mr taxi girls generator',
    photoUrl: 'https://ygsleyvmmvhydyfzkyiu.supabase.co/storage/v1/object/sign/Members/lana.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYmNlN2JkZS0wZDUwLTQ1NWYtODVhOC00YWZkNzI2ODM3OTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZW1iZXJzL2xhbmEuSlBHIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MzUyMjM5NywiZXhwIjoxODE1MDU4Mzk3fQ.2_zK1ihYoVuR_4JZWSvjMsSUFfImK16OJibaCstZx-s',
    displayOrder: 4,
  },
  {
    id: 'Jessica',
    name: 'JESS',
    role: 'DJ, Face of Soli, Content creator, Video editor, Photographer',
    personalityType: 'ENFJ',
    specialty: '2nd gen and 3rd gen girl groups',
    aboutMe: 'SNSD!',
    accentColor: '#6FE1FF',
    spotifyUri: 'spotify:track:2HRqTpkrJO5ggZyyK6NPWz',
    songLabel: 'Gee gee snsd',
    photoUrl: 'https://ygsleyvmmvhydyfzkyiu.supabase.co/storage/v1/object/sign/Members/jess.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYmNlN2JkZS0wZDUwLTQ1NWYtODVhOC00YWZkNzI2ODM3OTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZW1iZXJzL2plc3MuSlBHIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MzUyMjMyMywiZXhwIjoxODE1MDU4MzIzfQ.28lfRcliw--J4F6qAy3J9fTiua1AdaLR0V_JK7SF_Ec',
    displayOrder: 5,
  },
  {
    id: 'Samuel',
    name: 'SAMMY',
    role: 'Special guest DJ, technician, Set DJ, video and photo editor, Photographer, camerman, videographer',
    personalityType: 'ENFP',
    specialty: 'KR&B, K-Hip-hop',
    aboutMe: 'Also runs club NEWERA, NEWJEANS!',
    accentColor: '#6FFFC8',
    spotifyUri: 'spotify:track:3r8RuvgbX9s7ammBn07D3W',
    songLabel: 'Seven jk',
    photoUrl: '',
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
