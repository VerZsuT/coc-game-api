import type { LocationID } from '../enums'
import type ClanCapitalRanking from './ClanCapitalRanking'
import type ClanRanking from './ClanRanking'
import type ClanVersusRanking from './ClanVersusRanking'
import type GetListOptions from './GetListOptions'
import type Location from './Location'
import type PlayerRanking from './PlayerRanking'
import type PlayerVersusRanking from './PlayerVersusRanking'

interface LocationsRawAPI {
  /** Get information about specific location */
  getByID(locationID: LocationID): Promise<Location>
  /** List locations */
  getList(options?: GetListOptions): Promise<Location[]>
  /** Get clan rankings for a specific location */
  getClanRankings(locationID: LocationID, options?: GetListOptions): Promise<ClanRanking[]>
  /** Get player rankings for a specific location */
  getPlayerRankings(locationID: LocationID, options?: GetListOptions): Promise<PlayerRanking[]>
  /** Get capital rankings for a specific location */
  getCapitalRankings(locationID: LocationID, options?: GetListOptions): Promise<ClanCapitalRanking[]>
  /** Get clan versus rankings for a specific location */
  getClanVersusRankings(locationID: LocationID, options?: GetListOptions): Promise<ClanVersusRanking[]>
  /** Get player versus rankings for a specific location */
  getPlayerVersusRankings(locationID: LocationID, options?: GetListOptions): Promise<PlayerVersusRanking[]>
}

export default LocationsRawAPI
