import type Clan from './Clan'
import type ClanCapitalRaidSeasonExt from './ClanCapitalRaidSeasonExt'
import type ClanMember from './ClanMember'
import type ClanWarExt from './ClanWarExt'
import type ClanWarLeagueGroupExt from './ClanWarLeagueGroupExt'
import type ClanWarLogExtEntry from './ClanWarLogExtEntry'
import type GetListOptions from './GetListOptions'

interface ClanAPI {
  /** Get information about a clan */
  getInfo(): Promise<Clan>
  /** Retrieve clan's clan war log */
  getWarLog(options?: GetListOptions): Promise<ClanWarLogExtEntry[]>
  /** Retrieve information about clan's current clan war */
  getCurrentWar(): Promise<ClanWarExt>
  /** Retrieve information about clan's current clan war league group */
  getWarLeagueGroup(): Promise<ClanWarLeagueGroupExt>
  /** List clan members */
  getMembers(options?: GetListOptions): Promise<ClanMember[]>
  /** Retrieve clan's capital raid seasons */
  getCapitalRaidSeasons(options?: GetListOptions): Promise<ClanCapitalRaidSeasonExt[]>
}

export default ClanAPI
