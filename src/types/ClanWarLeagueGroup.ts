import type { ClanWarLeagueGroupState } from '../enums'
import type ClanWarLeagueClan from './ClanWarLeagueClan'
import type ClanWarLeagueRound from './ClanWarLeagueRound'

interface ClanWarLeagueGroup {
  tag: string
  state: ClanWarLeagueGroupState
  season: string
  clans: ClanWarLeagueClan[]
  rounds?: ClanWarLeagueRound[]
}

export default ClanWarLeagueGroup
