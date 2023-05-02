import type League from './League'
import type PlayerRankingClan from './PlayerRankingClan'

interface PlayerRanking {
  league: League
  clan: PlayerRankingClan
  attackWins: number
  defenseWins: number
  tag: string
  name: string
  expLevel: number
  rank: number
  previousRank: number
  trophies: number
}

export default PlayerRanking
