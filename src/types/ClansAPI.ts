import type ClanExt from './ClanExt'
import type ClansRawAPI from './ClansRawAPI'
import type FindClansOptions from './FindClansOptions'
import type FoundClan from './FoundClan'

interface ClansAPI {
  /** Search all clans by name and/or filtering the results using various criteria. At least one filtering criteria must be defined and if name is used as part of search, it is required to be at least three characters long. It is not possible to specify ordering for results so clients should not rely on any specific ordering as that may change in the future releases of the API */
  findAll(options: FindClansOptions): Promise<ClanExt<FoundClan>[]>
  /** Get clan object */
  getByTag(tag: string): ClanExt<{ tag: string }>
  /** Raw requests */
  raw: ClansRawAPI
}

export default ClansAPI
