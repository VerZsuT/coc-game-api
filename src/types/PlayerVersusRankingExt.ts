import type ClanExt from './ClanExt'
import type PlayerRankingClan from './PlayerRankingClan'
import type PlayerVersusRanking from './PlayerVersusRanking'

type PlayerVersusRankingExt = Omit<PlayerVersusRanking, 'clan'> & {
  clan: ClanExt<PlayerRankingClan>
}

export default PlayerVersusRankingExt
