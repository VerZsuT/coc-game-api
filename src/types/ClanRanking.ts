import type ClanBadgeUrls from './ClanBadgeUrls'
import type Location from './Location'

interface ClanRanking {
  clanLevel: number
  clanPoints: number
  location: Location
  members: number
  tag: string
  name: string
  rank: number
  previousRank: number
  badgeUrls: ClanBadgeUrls
}

export default ClanRanking
