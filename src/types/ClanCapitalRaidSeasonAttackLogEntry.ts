import type ClanCapitalRaidSeasonClanInfo from './ClanCapitalRaidSeasonClanInfo'
import type ClanCapitalRaidSeasonDistrict from './ClanCapitalRaidSeasonDistrict'

interface ClanCapitalRaidSeasonAttackLogEntry {
  defender: ClanCapitalRaidSeasonClanInfo
  attackCount: number
  districtCount: number
  districtsDestroyed: number
  districts: ClanCapitalRaidSeasonDistrict[]
}

export default ClanCapitalRaidSeasonAttackLogEntry
