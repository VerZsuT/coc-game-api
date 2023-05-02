import type ClanCapitalRaidSeasonAttackLogEntry from './ClanCapitalRaidSeasonAttackLogEntry'
import ClanCapitalRaidSeasonExtClanInfo from './ClanCapitalRaidSeasonExtClanInfo'

type ClanCapitalRaidSeasonExtAttackLogEntry = Omit<ClanCapitalRaidSeasonAttackLogEntry, 'defender'> & {
  defender: ClanCapitalRaidSeasonExtClanInfo
}

export default ClanCapitalRaidSeasonExtAttackLogEntry
