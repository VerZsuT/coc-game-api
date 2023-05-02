import type { ClanWarResult } from '../enums'
import type WarClan from './WarClan'

interface ClanWarLogEntry {
  clan: WarClan
  opponent: WarClan
  teamSize: number
  attacksPerMember: number
  endTime: string
  result: ClanWarResult
}

export default ClanWarLogEntry
