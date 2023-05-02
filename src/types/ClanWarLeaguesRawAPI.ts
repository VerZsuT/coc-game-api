import type ClanWarLeagueGroup from './ClanWarLeagueGroup'

interface ClanWarLeaguesRawAPI {
  /** Retrieve information about individual clan war league war */
  getWarLeagueWar(warTag: string): Promise<ClanWarLeagueGroup>
}

export default ClanWarLeaguesRawAPI
