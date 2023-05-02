import type { COCAPI } from '../types'
import getClansAPI from './clans'
import getWarLeaguesAPI from './clanwarleagues'
import getGoldpassAPI from './goldpass'
import getLabelsAPI from './labels'
import getLeaguesAPI from './leagues'
import getLocationsAPI from './locations'
import getPlayersAPI from './players'

function cocAPI(token: string): COCAPI {
  return {
    clans: getClansAPI(token),
    players: getPlayersAPI(token),
    clanwarleagues: getWarLeaguesAPI(token),
    goldpass: getGoldpassAPI(token),
    labels: getLabelsAPI(token),
    leagues: getLeaguesAPI(token),
    locations: getLocationsAPI(token)
  }
}

export default cocAPI
