import type ClanCapitalRaidSeasonClanInfo from './ClanCapitalRaidSeasonClanInfo'
import type ClanCapitalRaidSeasonDistrict from './ClanCapitalRaidSeasonDistrict'

interface ClanCapitalRaidSeasonDefenseLogEntry {
  attacker: ClanCapitalRaidSeasonClanInfo
  attackCount: number
  districtCount: number
  districtsDestroyed: number
  districts: ClanCapitalRaidSeasonDistrict[]
}

export default ClanCapitalRaidSeasonDefenseLogEntry
