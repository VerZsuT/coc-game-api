import type { ClanWarLeaguesAPI } from '../../types'
import { clanHelpers } from '../clans'
import { getClanWarLeagueWar } from './helpers'

function getWarLeaguesAPI(token: string): ClanWarLeaguesAPI {
  return {
    raw: {
      getWarLeagueWar: warTag => getClanWarLeagueWar(token, warTag)
    },
    async getWarLeagueWar(warTag: string) {
      const data = await getClanWarLeagueWar(token, warTag)
      return {
        ...data,
        clans: data.clans.map(clan => clanHelpers.createClanExtObject(token, clan.tag, clan))
      }
    }
  }
}

export default getWarLeaguesAPI
