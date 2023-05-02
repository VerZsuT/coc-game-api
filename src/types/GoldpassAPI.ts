import type GoldPassSeason from './GoldPassSeason'

interface GoldpassAPI {
  /** Get information about the current gold pass season */
  getCurrentSeason(): Promise<GoldPassSeason>
}

export default GoldpassAPI
