import type { ClanMemberRole } from '../enums'
import type League from './League'
import type PlayerHouse from './PlayerHouse'

interface ClanMember {
  league: League
  tag: string
  name: string
  role: ClanMemberRole
  expLevel: number
  clanRank: number
  previousClanRank?: number
  donations: number
  donationsReceived: number
  trophies: number
  versusTrophies: number
  playerHouse?: PlayerHouse
}

export default ClanMember
