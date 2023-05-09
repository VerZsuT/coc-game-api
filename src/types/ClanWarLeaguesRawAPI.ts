import type ClanWar from './ClanWar'

interface ClanWarLeaguesRawAPI {
  /** Retrieve information about individual clan war league war */
  getWarLeagueWar(warTag: string): Promise<ClanWar>
}

export default ClanWarLeaguesRawAPI
