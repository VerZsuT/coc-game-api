import type LegendSeasonResult from './LegendSeasonResult'

interface PlayerLegendStatistics {
  previousSeason: LegendSeasonResult
  previousVersusSeason: LegendSeasonResult
  bestVersusSeason: LegendSeasonResult
  legendTrophies: number
  currentSeason: LegendSeasonResult
  bestSeason: LegendSeasonResult
}

export default PlayerLegendStatistics
