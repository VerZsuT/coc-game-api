import cocAPI from './api'
import { CapitalLeagueID, LeagueID, LocationID, WarLeagueID } from './enums'
import type { FindClansOptions } from './types'

const API_TOKEN = ''
const CLAN_TAG = '#2QCCJCCLV'
const PLAYER_TAG = '#Q928J0UVP'

const api = cocAPI(API_TOKEN)

testAll().catch(console.dir)

async function testAll() {
  await Promise.all([
    testClans(),
    testClanWarLeagues(),
    testGoldpass(),
    testLabels(),
    testLeagues(),
    testPlayers(),
    testLocations()
  ])
}

async function testPlayers() {
  await Promise.all([
    testAPI(api.players.getByTag, PLAYER_TAG),
    testAPI(api.players.raw.getByTag, PLAYER_TAG)
  ])
  console.log('Success test Players API')
}

async function testLocations() {
  const location = api.locations.getByID(LocationID.Russia)
  await Promise.all([
    testAPI(location.getInfo),
    testAPI(location.getCapitalRankings),
    testAPI(location.getClanRankings),
    testAPI(location.getClanVersusRankings),
    testAPI(location.getPlayerRankings),
    testAPI(location.getPlayerVersusRankings),
    testAPI(api.locations.raw.getByID, LocationID.Russia),
    testAPI(api.locations.raw.getCapitalRankings, LocationID.Russia),
    testAPI(api.locations.raw.getClanRankings, LocationID.Russia),
    testAPI(api.locations.raw.getClanVersusRankings, LocationID.Russia),
    testAPI(api.locations.raw.getList),
    testAPI(api.locations.raw.getPlayerRankings, LocationID.Russia),
    testAPI(api.locations.raw.getPlayerVersusRankings, LocationID.Russia)
  ])
  console.log('Success test Locations API')
}

async function testLeagues() {
  await Promise.all([
    testAPI(api.leagues.getCapitalLeague, CapitalLeagueID.Bronze1),
    testAPI(api.leagues.getCapitalLeagues),
    testAPI(api.leagues.getLeague, LeagueID.Bronze1),
    testAPI(api.leagues.getLeagueSeasons, LeagueID.Legend),
    testAPI(api.leagues.getLeagues),
    testAPI(api.leagues.getWarLeagues),
    testAPI(api.leagues.getWarLeague, WarLeagueID.Bronze1),
    testAPI(api.leagues.getLeagueSeasonRankings, LeagueID.Legend, '2023-04')
  ])
  console.log('Success test Leagues API')
}

async function testLabels() {
  await Promise.all([
    testAPI(api.labels.getClanLabels),
    testAPI(api.labels.getPlayerLabels)
  ])
  console.log('Success test Labels API')
}

async function testGoldpass() {
  await testAPI(api.goldpass.getCurrentSeason)
  console.log('Success test Goldpass API')
}

async function testClanWarLeagues() {
  await Promise.all([
    testAPI(api.clanwarleagues.getWarLeagueWar, ''),
    testAPI(api.clanwarleagues.raw.getWarLeagueWar, '')
  ])
  console.log('Success test ClanWarLeagues API')
}

async function testClans() {
  const clan = api.clans.getByTag(CLAN_TAG)
  await Promise.all([
    testAPI(clan.getInfo),
    testAPI(clan.getCapitalRaidSeasons),
    testAPI(clan.getCurrentWar),
    testAPI(clan.getMembers),
    // testAPI(clan.getWarLeagueGroup),
    testAPI(clan.getWarLog),

    testAPI(api.clans.raw.findClans, { name: 'Deutschland' } satisfies FindClansOptions),
    testAPI(api.clans.raw.getInfo, CLAN_TAG),
    testAPI(api.clans.raw.getCapitalRaidSeasons, CLAN_TAG),
    testAPI(api.clans.raw.getCurrentWar, CLAN_TAG),
    testAPI(api.clans.raw.getMembers, CLAN_TAG),
    // testAPI(api.clans.raw.getCurrentWarLeagueWar, CLAN_TAG),
    testAPI(api.clans.raw.getWarLog, CLAN_TAG)
  ])
  console.log('Success test Clans API')
}

async function testAPI(api: (...args: any[]) => Promise<any>, ...args: any[]) {
  console.dir(await api(...args))
}
