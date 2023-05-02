import type ClanWarLeaguesAPI from './ClanWarLeaguesAPI'
import type ClansAPI from './ClansAPI'
import type GoldpassAPI from './GoldpassAPI'
import type LabelsAPI from './LabelsAPI'
import type LeaguesAPI from './LeaguesAPI'
import type LocationsAPI from './LocationsAPI'
import type PlayersAPI from './PlayersAPI'

/** Clash of Clans API */
interface COCAPI {
  /** Access clan specific information */
  clans: ClansAPI
  /** Access information about clan war league */
  clanwarleagues: ClanWarLeaguesAPI
  /** Access information about gold pass */
  goldpass: GoldpassAPI
  /** Access information about player/clan labels */
  labels: LabelsAPI
  /** Access league information */
  leagues: LeaguesAPI
  /** Access global and local rankings */
  locations: LocationsAPI
  /** Access player specific information */
  players: PlayersAPI
}

export default COCAPI
