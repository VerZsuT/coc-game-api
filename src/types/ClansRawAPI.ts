import type Clan from './Clan'
import type ClanCapitalRaidSeason from './ClanCapitalRaidSeason'
import type ClanMember from './ClanMember'
import type ClanWar from './ClanWar'
import type ClanWarLeagueGroup from './ClanWarLeagueGroup'
import type ClanWarLogEntry from './ClanWarLogEntry'
import type FindClansOptions from './FindClansOptions'
import type FoundClan from './FoundClan'
import type GetListOptions from './GetListOptions'

interface ClansRawAPI {
  getCurrentWarLeagueWar(clanTag: string): Promise<ClanWarLeagueGroup>
  /** Retrieve clan's clan war log */
  getWarLog(clanTag: string, options?: GetListOptions): Promise<ClanWarLogEntry[]>
  /** Search all clans by name and/or filtering the results using various criteria. At least one filtering criteria must be defined and if name is used as part of search, it is required to be at least three characters long. It is not possible to specify ordering for results so clients should not rely on any specific ordering as that may change in the future releases of the API */
  findClans(options: FindClansOptions): Promise<FoundClan[]>
  /** Retrieve information about clan's current clan war */
  getCurrentWar(clanTag: string): Promise<ClanWar>
  /** Get information about a clan */
  getInfo(clanTag: string): Promise<Clan>
  /** List clan members */
  getMembers(clanTag: string, options?: GetListOptions): Promise<ClanMember[]>
  /** Retrieve clan's capital raid seasons */
  getCapitalRaidSeasons(clanTag: string, options?: GetListOptions): Promise<ClanCapitalRaidSeason[]>
}

export default ClansRawAPI
