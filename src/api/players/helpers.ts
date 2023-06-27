import { getFromAPI, postToAPI } from '../../helpers';
import type { PlayerInfo } from '../../types';
import PlayerVerification from '../../types/PlayerVerification';

export function getPlayerInfo(token: string, playerTag: string) {
	return getFromAPI<PlayerInfo>(
		token,
		`players/%23${playerTag.replace('#', '')}`
	);
}

export function verifyToken(
	token: string,
	playerTag: string,
	playerAPIToken: string
) {
	return postToAPI<PlayerVerification>(
		token,
		`players/%23${playerTag.replace('#', '')}/verifytoken`,
		{ token: playerAPIToken }
	);
}
