import type { Village } from '../enums'

interface PlayerAchivement {
  stars: number
  value: number
  name: string
  target: number
  info: string
  completionInfo: string
  village: Village
}

export default PlayerAchivement
