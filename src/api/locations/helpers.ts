import type { LocationID } from '../../enums'
import { getFromAPI } from '../../helpers'
import type { ClanCapitalRanking, ClanRanking, ClanVersusRanking, GetListOptions, Items, Location, LocationExt, PlayerRanking, PlayerVersusRanking } from '../../types'
import { clanHelpers } from '../clans'

const locationAPI = (locationID: LocationID) => `locations/${locationID}`
const rankingsAPI = (locationID: LocationID, api: string) => `${locationAPI(locationID)}/rankings/${api}`

export function createLocationExt<T extends object = {}>(token: string, locationID: LocationID, obj = {} as T): LocationExt<T> {
  return {
    ...obj,
    getInfo: () => getLocationInfo(token, locationID),
    async getClanRankings(options) {
      const data = await getLocationClanRankings(token, locationID, options)
      return data.map(item => clanHelpers.createClanExtObject(token, item.tag, item))
    },
    async getPlayerRankings(options) {
      const data = await getLocationPlayerRankings(token, locationID, options)
      return data.map(item => ({ ...item, clan: clanHelpers.createClanExtObject(token, item.tag, item.clan) }))
    },
    async getPlayerVersusRankings(options) {
      const data = await getLocationPlayerVersusRankings(token, locationID, options)
      return data.map(item => ({ ...item, clan: clanHelpers.createClanExtObject(token, item.tag, item.clan) }))
    },
    getCapitalRankings: options => getLocationCapitalRankings(token, locationID, options),
    getClanVersusRankings: options => getLocationClanVersusRankings(token, locationID, options)
  }
}

export async function getLocations(token: string, options?: GetListOptions) {
  return (await getFromAPI<Items<Location>>(token, 'locations', options)).items
}

export async function getLocationInfo(token: string, locationID: LocationID) {
  return await getFromAPI<Location>(token, locationAPI(locationID))
}

export async function getLocationClanRankings(token: string, locationID: LocationID, options?: GetListOptions) {
  return (await getFromAPI<Items<ClanRanking>>(token, rankingsAPI(locationID, 'clans'), options)).items
}

export async function getLocationPlayerRankings(token: string, locationID: LocationID, options?: GetListOptions) {
  return (await getFromAPI<Items<PlayerRanking>>(token, rankingsAPI(locationID, 'players'), options)).items
}

export async function getLocationCapitalRankings(token: string, locationID: LocationID, options?: GetListOptions) {
  return (await getFromAPI<Items<ClanCapitalRanking>>(token, rankingsAPI(locationID, 'capitals'), options)).items
}

export async function getLocationClanVersusRankings(token: string, locationID: LocationID, options?: GetListOptions) {
  return (await getFromAPI<Items<ClanVersusRanking>>(token, rankingsAPI(locationID, 'clans-versus'), options)).items
}

export async function getLocationPlayerVersusRankings(token: string, locationID: LocationID, options?: GetListOptions) {
  return (await getFromAPI<Items<PlayerVersusRanking>>(token, rankingsAPI(locationID, 'players-versus'), options)).items
}
