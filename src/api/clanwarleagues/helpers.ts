import { getFromAPI } from '../../helpers'
import type { ClanWarLeagueGroup } from '../../types'

export function getClanWarLeagueWar(token: string, warTag: string) {
  return getFromAPI<ClanWarLeagueGroup>(token, `clanwarleagues/wars/${warTag}`)
}
