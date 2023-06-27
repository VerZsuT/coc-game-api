import type { PlayersAPI } from '../../types';
import { clanHelpers } from '../clans';
import { getPlayerInfo, verifyToken } from './helpers';

function getPlayersAPI(token: string): PlayersAPI {
	return {
		raw: {
			getByTag: (tag) => getPlayerInfo(token, tag),
			verifyToken: (tag, playerAPIToken) =>
				verifyToken(token, tag, playerAPIToken),
		},
		async getByTag(tag) {
			const data = await getPlayerInfo(token, tag);
			return {
				...data,
				clan: clanHelpers.createClanExtObject(token, data.clan.tag, data.clan),
			};
		},
		async verifyToken(tag, playerAPIToken) {
			return await verifyToken(token, tag, playerAPIToken);
		},
	};
}

export default getPlayersAPI;
