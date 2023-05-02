import type ClanExt from './ClanExt'
import type PlayerClan from './PlayerClan'
import type PlayerInfo from './PlayerInfo'

type PlayerInfoExt = Omit<PlayerInfo, 'clan'> & {
  clan: ClanExt<PlayerClan>
}

export default PlayerInfoExt
