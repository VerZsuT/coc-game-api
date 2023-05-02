import type ClanAPI from './ClanAPI'

type ClanExt<T extends object = {}> = T & ClanAPI

export default ClanExt
