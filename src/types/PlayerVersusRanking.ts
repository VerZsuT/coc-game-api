import type PlayerRankingClan from './PlayerRankingClan'

interface PlayerVersusRanking {
  clan: PlayerRankingClan
  versusBattleWins: number
  tag: string
  name: string
  expLevel: number
  rank: number
  previousRank: number
  versusTrophies: number
}

export default PlayerVersusRanking
