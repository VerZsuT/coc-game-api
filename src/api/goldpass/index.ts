import { getFromAPI } from '../../helpers'
import type { GoldpassAPI } from '../../types'

function getGoldpassAPI(token: string): GoldpassAPI {
  return {
    getCurrentSeason: () => getFromAPI(token, 'goldpass/seasons/current')
  }
}

export default getGoldpassAPI
