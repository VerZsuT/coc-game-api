import type PlayerInfo from './PlayerInfo'

interface PlayersRawAPI {
  /** Get information about a single player by player tag */
  getByTag(playerTag: string): Promise<PlayerInfo>
}

export default PlayersRawAPI
