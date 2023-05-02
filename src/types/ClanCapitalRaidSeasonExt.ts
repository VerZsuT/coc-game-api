import type ClanCapitalRaidSeason from './ClanCapitalRaidSeason'
import type ClanCapitalRaidSeasonExtAttackLogEntry from './ClanCapitalRaidSeasonExtAttackLogEntry'
import type ClanCapitalRaidSeasonExtDefenseLogEntry from './ClanCapitalRaidSeasonExtDefenseLogEntry'

type ClanCapitalRaidSeasonExt = Omit<ClanCapitalRaidSeason, 'attackLog' | 'defenceLog'> & {
  attackLog: ClanCapitalRaidSeasonExtAttackLogEntry[]
  defenseLog: ClanCapitalRaidSeasonExtDefenseLogEntry[]
}

export default ClanCapitalRaidSeasonExt
