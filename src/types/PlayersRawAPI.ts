import type PlayerInfo from './PlayerInfo'
import type PlayerVerification from './PlayerVerification'

interface PlayersRawAPI {
	/** Verify an api token for a single player by tag */
	verifyToken(
		playerTag: string,
		playerAPIToken: string
	): Promise<PlayerVerification>
	/** Get information about a single player by player tag */
	getByTag(playerTag: string): Promise<PlayerInfo>
}

export default PlayersRawAPI
