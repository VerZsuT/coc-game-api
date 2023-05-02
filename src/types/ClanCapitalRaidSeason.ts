import type { ClanCapitalRaidSeasonState } from '../enums'
import type ClanCapitalRaidSeasonAttackLogEntry from './ClanCapitalRaidSeasonAttackLogEntry'
import type ClanCapitalRaidSeasonDefenseLogEntry from './ClanCapitalRaidSeasonDefenseLogEntry'
import type ClanCapitalRaidSeasonMember from './ClanCapitalRaidSeasonMember'

interface ClanCapitalRaidSeason {
  attackLog: ClanCapitalRaidSeasonAttackLogEntry[]
  defenseLog: ClanCapitalRaidSeasonDefenseLogEntry[]
  state: ClanCapitalRaidSeasonState
  startTime: string
  endTime: string
  capitalTotalLoot: number
  raidsCompleted: number
  totalAttacks: number
  enemyDistrictsDestroyed: number
  offensiveReward: number
  defensiveReward: number
  members?: ClanCapitalRaidSeasonMember[]
}

export default ClanCapitalRaidSeason
