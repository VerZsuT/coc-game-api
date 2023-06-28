import type PlayerInfoExt from './PlayerInfoExt'
import type PlayerVerification from './PlayerVerification'
import type PlayersRawAPI from './PlayersRawAPI'

interface PlayersAPI {
	/** Verify an api token for a single player by tag */
	verifyToken(
		playerTag: string,
		playerAPIToken: string
	): Promise<PlayerVerification>
	/** Get information about a single player by player tag */
	getByTag(playerTag: string): Promise<PlayerInfoExt>
	/** Raw requests */
	raw: PlayersRawAPI
}

export default PlayersAPI
