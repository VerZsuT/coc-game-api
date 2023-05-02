import type { LeaguesAPI } from '../../types'
import { clanHelpers } from '../clans'
import { getCapitalLeague, getCapitalLeagues, getLeague, getLeagueSeasonRankings, getLeagueSeasons, getLeagues, getWarLeague, getWarLeagues } from './helpers'

function getLeaguesAPI(token: string): LeaguesAPI {
  return {
    raw: {
      getLeagueSeasonRankings: (leagueID, seasonID, options) => getLeagueSeasonRankings(token, leagueID, seasonID, options)
    },
    getCapitalLeague: leagueID => getCapitalLeague(token, leagueID),
    getCapitalLeagues: options => getCapitalLeagues(token, options),
    getLeague: leagueID => getLeague(token, leagueID),
    getLeagues: options => getLeagues(token, options),
    async getLeagueSeasonRankings(leagueID, seasonID, options) {
      const data = await getLeagueSeasonRankings(token, leagueID, seasonID, options)
      return data.map(item => ({
        ...item,
        clan: clanHelpers.createClanExtObject(token, item.tag, item.clan)
      }))
    },
    getLeagueSeasons: (leagueID, options) => getLeagueSeasons(token, leagueID, options),
    getWarLeague: leagueID => getWarLeague(token, leagueID),
    getWarLeagues: options => getWarLeagues(token, options)
  }
}

export default getLeaguesAPI
