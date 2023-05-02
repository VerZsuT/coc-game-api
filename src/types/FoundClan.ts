import type Clan from './Clan'

type FoundClan = Omit<Clan, 'memberList' | 'clanCapital'>

export default FoundClan
