import type { AxiosProxyConfig } from 'axios'
import { setProxy } from '../helpers'
import type { COCAPI } from '../types'
import getClansAPI from './clans'
import getWarLeaguesAPI from './clanwarleagues'
import getGoldpassAPI from './goldpass'
import getLabelsAPI from './labels'
import getLeaguesAPI from './leagues'
import getLocationsAPI from './locations'
import getPlayersAPI from './players'

function cocAPI(token: string, proxy?: AxiosProxyConfig): COCAPI {
  if (proxy) setProxy(proxy)
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
