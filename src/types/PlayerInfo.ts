import type { ClanMemberRole, PlayerWarPreference } from '../enums'
import type Label from './Label'
import type League from './League'
import type PlayerAchivement from './PlayerAchivement'
import type PlayerClan from './PlayerClan'
import type PlayerHouse from './PlayerHouse'
import type PlayerItemLevel from './PlayerItemLevel'
import type PlayerLegendStatistics from './PlayerLegendStatistics'

interface PlayerInfo {
  league: League
  clan?: PlayerClan
  role: ClanMemberRole
  warPreference: PlayerWarPreference
  attackWins: number
  defenseWins: number
  townHallLevel: number
  townHallWeaponLevel: number
  versusBattleWins: number
  legendStatistics?: PlayerLegendStatistics
  troops: PlayerItemLevel[]
  heroes: PlayerItemLevel[]
  spells: PlayerItemLevel[]
  labels: Label[]
  tag: string
  name: string
  expLevel: number
  trophies: number
  bestTrophies: number
  donations: number
  donationsReceived: number
  builderHallLevel: number
  versusTrophies: number
  bestVersusTrophies: number
  warStars: number
  achievements: PlayerAchivement[]
  clanCapitalContributions: number
  playerHouse: PlayerHouse
  versusBattleWinCount: number
}

export default PlayerInfo
