import type { LeagueID } from '../enums'
import type LeagueIconUrls from './LeagueIconUrls'

interface League {
  id: LeagueID
  name: string
  iconUrls: LeagueIconUrls
}

export default League
