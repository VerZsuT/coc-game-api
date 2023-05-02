import type ClanWarLeagueGroupExt from './ClanWarLeagueGroupExt'
import type ClanWarLeaguesRawAPI from './ClanWarLeaguesRawAPI'

interface ClanWarLeaguesAPI {
  /** Retrieve information about individual clan war league war */
  getWarLeagueWar(warTag: string): Promise<ClanWarLeagueGroupExt>
  /** Raw requests */
  raw: ClanWarLeaguesRawAPI
}

export default ClanWarLeaguesAPI
