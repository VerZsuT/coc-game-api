import type { Village } from '../enums'

interface PlayerItemLevel {
  level: number
  name: string
  maxLevel: number
  village: Village
  superTroopIsActive: boolean
}

export default PlayerItemLevel
