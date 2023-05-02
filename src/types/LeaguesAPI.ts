import type { CapitalLeagueID, LeagueID, WarLeagueID } from '../enums'
import type CapitalLeague from './CapitalLeague'
import type GetListOptions from './GetListOptions'
import type League from './League'
import type LeagueSeason from './LeagueSeason'
import type LeaguesRawAPI from './LeaguesRawAPI'
import type PlayerRankingExt from './PlayerRankingExt'
import type WarLeague from './WarLeague'

interface LeaguesAPI {
  /** Raw requests */
  raw: LeaguesRawAPI
  /** List capital leagues */
  getCapitalLeagues(options?: GetListOptions): Promise<CapitalLeague[]>
  /** Get capital league information */
  getCapitalLeague(leagueID: CapitalLeagueID): Promise<CapitalLeague>
  /** List leagues */
  getLeagues(options?: GetListOptions): Promise<League[]>
  /** Get league information */
  getLeague(leagueID: LeagueID): Promise<League>
  /** Get league seasons. Note that league season information is available only for Legend League */
  getLeagueSeasons(leagueID: LeagueID, options?: GetListOptions): Promise<LeagueSeason[]>
  /** List war leagues */
  getWarLeagues(options?: GetListOptions): Promise<WarLeague[]>
  /** Get war league information */
  getWarLeague(leagueID: WarLeagueID): Promise<WarLeague>
  /** Get league season rankings. Note that league season information is available only for Legend League */
  getLeagueSeasonRankings(leagueID: LeagueID, seasonID: string, options?: GetListOptions): Promise<PlayerRankingExt[]>
}

export default LeaguesAPI
