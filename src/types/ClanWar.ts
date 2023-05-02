import type { ClanWarResult } from '../enums'
import type WarClan from './WarClan'

interface ClanWar {
  clan: WarClan
  opponent: WarClan
  teamSize: number
  attacksPerMember: number
  startTime: string
  state: ClanWarResult
  endTime: string
  preparationStartTime: string
}

export default ClanWar
