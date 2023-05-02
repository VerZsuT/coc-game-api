import type { PlayersAPI } from '../../types'
import { clanHelpers } from '../clans'
import { getPlayerInfo } from './helpers'

function getPlayersAPI(token: string): PlayersAPI {
  return {
    raw: {
      getByTag: tag => getPlayerInfo(token, tag)
    },
    async getByTag(tag) {
      const data = await getPlayerInfo(token, tag)
      return {
        ...data,
        clan: clanHelpers.createClanExtObject(token, data.clan.tag, data.clan)
      }
    }
  }
}

export default getPlayersAPI
