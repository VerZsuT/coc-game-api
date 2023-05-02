import type { WarFrequency } from '../enums'
import GetListOptions from './GetListOptions'

interface FindClansOptions extends GetListOptions {
  /** Search clans by name. If name is used as part of search query, it needs to be at least three characters long. Name search parameter is interpreted as wild card search, so it may appear anywhere in the clan name */
  name?: string
  /** Filter by clan war frequency */
  warFrequency?: WarFrequency
  /** Filter by clan location identifier */
  locationId?: number
  /** Filter by minimum number of clan members */
  minMembers?: number
  /** Filter by maximum number of clan members */
  maxMembers?: number
  /** Filter by minimum amount of clan points */
  minClanPoints?: number
  /** Filter by minimum clan level */
  minClanLevel?: number
  /** List of label IDs to use for filtering results */
  labelIds?: string[]
}

export default FindClansOptions
