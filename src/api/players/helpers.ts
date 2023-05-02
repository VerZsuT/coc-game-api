import { getFromAPI } from '../../helpers'
import type { PlayerInfo } from '../../types'

export function getPlayerInfo(token: string, playerTag: string) {
  return getFromAPI<PlayerInfo>(token, `players/%23${playerTag.replace('#', '')}`)
}
