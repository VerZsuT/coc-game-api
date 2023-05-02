import type PlayerInfoExt from './PlayerInfoExt'
import type PlayersRawAPI from './PlayersRawAPI'

interface PlayersAPI {
  /** Get information about a single player by player tag */
  getByTag(playerTag: string): Promise<PlayerInfoExt>
  /** Raw requests */
  raw: PlayersRawAPI
}

export default PlayersAPI
