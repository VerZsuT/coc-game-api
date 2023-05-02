import type ClanBadgeUrls from './ClanBadgeUrls'
import type ClanWarLeagueClanMember from './ClanWarLeagueClanMember'

interface ClanWarLeagueClan {
  tag: string
  clanLevel: number
  name: string
  members: ClanWarLeagueClanMember[]
  badgeUrls: ClanBadgeUrls
}

export default ClanWarLeagueClan
