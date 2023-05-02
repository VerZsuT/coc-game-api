import type { ClansAPI } from '../../types'
import { createClanExtObject, createFoundClanObject, findClans, getClanCapitalRaidSeasons, getClanCurrentWar, getClanCurrentWarLeagueWar, getClanInfo, getClanMembers, getClanWarLog } from './helpers'
export * as clanHelpers from './helpers'

function getClansAPI(token: string): ClansAPI {
  return {
    raw: {
      getInfo: tag => getClanInfo(token, tag),
      findClans: options => findClans(token, options),
      getCapitalRaidSeasons: (tag, options) => getClanCapitalRaidSeasons(token, tag, options),
      getWarLog: (tag, options) => getClanWarLog(token, tag, options),
      getCurrentWar: tag => getClanCurrentWar(token, tag),
      getMembers: (tag, options) => getClanMembers(token, tag, options),
      getCurrentWarLeagueWar: tag => getClanCurrentWarLeagueWar(token, tag)
    },
    async findAll(options) {
      const data = await findClans(token, options)
      return data.map(item => createFoundClanObject(token, item.tag, item))
    },
    getByTag: tag => createClanExtObject(token, tag, { tag })
  }
}



export default getClansAPI
