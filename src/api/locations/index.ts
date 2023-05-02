import type { LocationsAPI } from '../../types'
import { createLocationExt, getLocationCapitalRankings, getLocationClanRankings, getLocationClanVersusRankings, getLocationInfo, getLocationPlayerRankings, getLocationPlayerVersusRankings, getLocations } from './helpers'

function getLocationsAPI(token: string): LocationsAPI {
  return {
    raw: {
      getList: options => getLocations(token, options),
      getByID: locationID => getLocationInfo(token, locationID),
      getClanRankings: (id, options) => getLocationClanRankings(token, id, options),
      getPlayerRankings: (id, options) => getLocationPlayerRankings(token, id, options),
      getCapitalRankings: (id, options) => getLocationCapitalRankings(token, id, options),
      getClanVersusRankings: (id, options) => getLocationClanVersusRankings(token, id, options),
      getPlayerVersusRankings: (id, options) => getLocationPlayerVersusRankings(token, id, options)
    },
    getByID: locationID => createLocationExt(token, locationID, { id: locationID }),
    async getList(options) {
      const data = await getLocations(token, options)
      return data.map(item => createLocationExt(token, item.id, item))
    }
  }
}

export default getLocationsAPI
