import { CapitalLeagueID, LeagueID, WarLeagueID } from '../../enums'
import { getFromAPI } from '../../helpers'
import type { CapitalLeague, GetListOptions, Items, League, LeagueSeason, PlayerRanking, WarLeague } from '../../types'

export async function getCapitalLeagues(token: string, options?: GetListOptions) {
  return (await getFromAPI<Items<CapitalLeague>>(token, 'capitalleagues', options)).items
}

export function getCapitalLeague(token: string, leagueID: CapitalLeagueID) {
  return getFromAPI<CapitalLeague>(token, `capitalleagues/${leagueID}`)
}

export async function getLeagues(token: string, options?: GetListOptions) {
  return (await getFromAPI<Items<League>>(token, 'leagues', options)).items
}

export function getLeague(token: string, leagueID: LeagueID) {
  return getFromAPI<League>(token, `leagues/${leagueID}`)
}

export async function getLeagueSeasons(token: string, leagueID: LeagueID, options?: GetListOptions) {
  return (await getFromAPI<Items<LeagueSeason>>(token, `leagues/${leagueID}/seasons`, options)).items
}

export async function getLeagueSeasonRankings(token: string, leagueID: LeagueID, seasonID: string, options?: GetListOptions) {
  return (await getFromAPI<Items<PlayerRanking>>(token, `leagues/${leagueID}/seasons/${seasonID}`, options)).items
}

export async function getWarLeagues(token: string, options?: GetListOptions) {
  return (await getFromAPI<Items<WarLeague>>(token, 'warleagues', options)).items
}

export function getWarLeague(token: string, leagueID: WarLeagueID) {
  return getFromAPI<WarLeague>(token, `warleagues/${leagueID}`)
}
