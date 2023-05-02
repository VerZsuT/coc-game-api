import { getFromAPI } from '../../helpers'
import type { Clan, ClanCapitalRaidSeason, ClanExt, ClanMember, ClanWar, ClanWarLeagueGroup, ClanWarLogEntry, FindClansOptions, FoundClan, GetListOptions, Items } from '../../types'

export function createClanExtObject<T extends object = Clan>(token: string, tag: string, values: T): ClanExt<T> {
  if (!tag) {
    // @ts-ignore
    return values
  }
  const clanApi = getClanAPIURL(tag)
  return {
    ...values,
    getInfo: () => getFromAPI(token, `${clanApi}`),
    getMembers: options => getClanMembers(token, tag, options),
    async getWarLog(options) {
      const data = await getClanWarLog(token, tag, options)
      console.dir(data)
      return data.map(item => ({
        ...item,
        clan: createClanExtObject(token, item.clan.tag, item.clan),
        opponent: createClanExtObject(token, item.opponent.tag, item.opponent)
      }))
    },
    async getCapitalRaidSeasons(options) {
      const data = await getClanCapitalRaidSeasons(token, tag, options)
      return data.map(item => ({
        ...item,
        attackLog: item.attackLog.map(log => ({
          ...log,
          defender: createClanExtObject(token, log.defender.tag, log.defender)
        })),
        defenseLog: item.defenseLog.map(log => ({
          ...log,
          attacker: createClanExtObject(token, log.attacker.tag, log.attacker)
        }))
      }))
    },
    async getCurrentWar() {
      const data = await getClanCurrentWar(token, tag)
      return {
        ...data,
        clan: createClanExtObject(token, data.clan.tag, data.clan),
        opponent: createClanExtObject(token, data.opponent.tag, data.opponent)
      }
    },
    async getWarLeagueGroup() {
      const data = await getClanCurrentWarLeagueWar(token, tag)
      return {
        ...data,
        clans: data.clans.map(clan => createClanExtObject(token, clan.tag, clan))
      }
    }
  }
}
export function createFoundClanObject(token: string, tag: string, values: FoundClan) {
  return createClanExtObject(token, tag, values)
}

export function getClanAPIURL(tag: string): string {
  return `clans/%23${tag.replace('#', '')}`
}

export async function findClans(token: string, options: FindClansOptions) {
  return (await getFromAPI<Items<FoundClan>>(token, 'clans', options)).items
}

export function getClanInfo(token: string, clanTag: string) {
  return getFromAPI<Clan>(token, getClanAPIURL(clanTag))
}

export async function getClanCapitalRaidSeasons(token: string, clanTag: string, options?: GetListOptions) {
  return (await getFromAPI<Items<ClanCapitalRaidSeason>>(token, `${getClanAPIURL(clanTag)}/capitalraidseasons`, options)).items
}

export function getClanCurrentWar(token: string, clanTag: string) {
  return getFromAPI<ClanWar>(token, `${getClanAPIURL(clanTag)}/currentwar`)
}

export async function getClanWarLog(token: string, clanTag: string, options?: GetListOptions) {
  return (await getFromAPI<Items<ClanWarLogEntry>>(token, `${getClanAPIURL(clanTag)}/warlog`, options)).items
}

export async function getClanMembers(token: string, clanTag: string, options?: GetListOptions) {
  return (await getFromAPI<Items<ClanMember>>(token, `${getClanAPIURL(clanTag)}/members`, options)).items
}

export function getClanCurrentWarLeagueWar(token: string, clanTag: string) {
  return getFromAPI<ClanWarLeagueGroup>(token, `${getClanAPIURL(clanTag)}/currentwar/leaguegroup`)
}
