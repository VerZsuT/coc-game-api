import type ClanCapitalRaidSeasonAttack from './ClanCapitalRaidSeasonAttack'

interface ClanCapitalRaidSeasonDistrict {
  stars: number
  name: string
  id: number
  destructionPercent: number
  attackCount: number
  totalLooted: number
  attacks: ClanCapitalRaidSeasonAttack[]
  districtHallLevel: number
}

export default ClanCapitalRaidSeasonDistrict
