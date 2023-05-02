import type ClanExt from './ClanExt'
import type PlayerRanking from './PlayerRanking'
import type PlayerRankingClan from './PlayerRankingClan'

type PlayerRankingExt = Omit<PlayerRanking, 'clan'> & {
  clan: ClanExt<PlayerRankingClan>
}

export default PlayerRankingExt
