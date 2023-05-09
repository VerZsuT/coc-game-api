import type ClanWarExt from './ClanWarExt'
import type ClanWarLeaguesRawAPI from './ClanWarLeaguesRawAPI'

interface ClanWarLeaguesAPI {
  /** Retrieve information about individual clan war league war */
  getWarLeagueWar(warTag: string): Promise<ClanWarExt>
  /** Raw requests */
  raw: ClanWarLeaguesRawAPI
}

export default ClanWarLeaguesAPI
