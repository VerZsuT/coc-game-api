import type ClanExt from './ClanExt'
import type ClanWarLogEntry from './ClanWarLogEntry'
import type WarClan from './WarClan'

type ClanWarLogExtEntry = Omit<ClanWarLogEntry, 'clan' | 'opponent'> & {
  clan: ClanExt<WarClan>
  opponent: ClanExt<WarClan>
}

export default ClanWarLogExtEntry
