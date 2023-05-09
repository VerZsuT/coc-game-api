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
        clan: clanHelpers.createClanExtObject(token, data.clan.tag, data.clan),
        opponent: clanHelpers.createClanExtObject(token, data.opponent.tag, data.opponent)
      }
    }
  }
}

export default getWarLeaguesAPI
