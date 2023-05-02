import type { ClanType, WarFrequency } from '../enums'
import type CapitalLeague from './CapitalLeague'
import type ClanBadgeUrls from './ClanBadgeUrls'
import type ClanCapital from './ClanCapital'
import type ClanMember from './ClanMember'
import type Label from './Label'
import type Language from './Language'
import type Location from './Location'
import type WarLeague from './WarLeague'

interface Clan {
  warLeague: WarLeague
  capitalLeague: CapitalLeague
  memberList: ClanMember[]
  tag: string
  warWinStreak: number
  warWins: number
  warTies: number
  warLosses: number
  clanPoints: number
  chatLanguage: Language
  requiredTrophies: number
  requiredVersusTrophies: number
  requiredTownhallLevel: number
  isFamilyFriendly: boolean
  isWarLogPublic: boolean
  clanVersusPoints: number
  clanCapitalPoints: number
  warFrequency: WarFrequency
  clanLevel: number
  labels: Label[]
  name: string
  location?: Location
  type: ClanType
  members: number
  description: string
  clanCapital: ClanCapital
  badgeUrls: ClanBadgeUrls
}

export default Clan
