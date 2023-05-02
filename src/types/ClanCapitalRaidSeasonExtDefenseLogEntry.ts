import type ClanCapitalRaidSeasonDefenseLogEntry from './ClanCapitalRaidSeasonDefenseLogEntry'
import type ClanCapitalRaidSeasonExtClanInfo from './ClanCapitalRaidSeasonExtClanInfo'

type ClanCapitalRaidSeasonExtDefenseLogEntry = Omit<ClanCapitalRaidSeasonDefenseLogEntry, 'attacker'> & {
  attacker: ClanCapitalRaidSeasonExtClanInfo
}

export default ClanCapitalRaidSeasonExtDefenseLogEntry
