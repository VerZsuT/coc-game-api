import { getFromAPI } from '../../helpers'
import type { ClanWar } from '../../types'

export function getClanWarLeagueWar(token: string, warTag: string) {
  return getFromAPI<ClanWar>(token, `clanwarleagues/wars/%23${warTag.replace('#', '')}`)
}
