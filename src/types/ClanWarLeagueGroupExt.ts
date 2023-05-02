import type ClanExt from './ClanExt'
import type ClanWarLeagueClan from './ClanWarLeagueClan'
import type ClanWarLeagueGroup from './ClanWarLeagueGroup'

type ClanWarLeagueGroupExt = Omit<ClanWarLeagueGroup, 'clans'> & {
  clans: ClanExt<ClanWarLeagueClan>[]
}

export default ClanWarLeagueGroupExt
