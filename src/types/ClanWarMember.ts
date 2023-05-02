import type ClanWarAttack from './ClanWarAttack'

interface ClanWarMember {
  tag: string
  name: string
  mapPosition: number
  townhallLevel: number
  opponentAttacks: number
  bestOpponentAttack?: ClanWarAttack
  attacks?: ClanWarAttack[]
}

export default ClanWarMember
