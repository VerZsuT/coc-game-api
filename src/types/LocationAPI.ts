import type ClanCapitalRanking from './ClanCapitalRanking'
import type ClanExt from './ClanExt'
import type ClanRanking from './ClanRanking'
import type ClanVersusRanking from './ClanVersusRanking'
import type GetListOptions from './GetListOptions'
import type Location from './Location'
import type PlayerRankingExt from './PlayerRankingExt'
import type PlayerVersusRankingExt from './PlayerVersusRankingExt'

interface LocationAPI {
  /** Get information about location */
  getInfo(): Promise<Location>
  /** Get clan rankings for a location */
  getClanRankings(options?: GetListOptions): Promise<ClanExt<ClanRanking>[]>
  /** Get player rankings for a location */
  getPlayerRankings(options?: GetListOptions): Promise<PlayerRankingExt[]>
  /** Get clan versus rankings for a location */
  getClanVersusRankings(options?: GetListOptions): Promise<ClanVersusRanking[]>
  /** Get player versus rankings for a location */
  getPlayerVersusRankings(options?: GetListOptions): Promise<PlayerVersusRankingExt[]>
  /** Get capital rankings for a location */
  getCapitalRankings(options?: GetListOptions): Promise<ClanCapitalRanking[]>
}

export default LocationAPI
