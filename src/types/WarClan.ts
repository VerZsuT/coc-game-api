import type ClanBadgeUrls from './ClanBadgeUrls'
import type ClanWarMember from './ClanWarMember'

interface WarClan {
  destructionPercentage: number
  tag: string
  name: string
  badgeUrls: ClanBadgeUrls
  lanLevel: number
  attacks: number
  stars: number
  expEarned: number
  members: ClanWarMember[]
}

export default WarClan
