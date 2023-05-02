import type { LeagueID } from '../enums'
import type GetListOptions from './GetListOptions'
import type PlayerRanking from './PlayerRanking'

interface LeaguesRawAPI {
  /** Get league season rankings. Note that league season information is available only for Legend League */
  getLeagueSeasonRankings(leagueID: LeagueID, seasonID: string, options?: GetListOptions): Promise<PlayerRanking[]>
}

export default LeaguesRawAPI
