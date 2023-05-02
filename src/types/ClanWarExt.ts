import type ClanExt from './ClanExt'
import type ClanWar from './ClanWar'
import type WarClan from './WarClan'

type ClanWarExt = Omit<ClanWar, 'clan' | 'opponent'> & {
  clan: ClanExt<WarClan>
  opponent: ClanExt<WarClan>
}

export default ClanWarExt
