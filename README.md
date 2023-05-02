# Clash of Clans API

**_Full types support_**

## Installation

```cmd
npm i coc-api --save
```

## Usage

### Clans

**Find clans by filters**

```js
import { cocAPI, WarFrequency } from 'coc-api'
const { clans } = cocAPI(TOKEN)

clans.findAll({
  name: 'Deutschland',
  warFrequency: WarFrequency.always,
  minMembers: 10,
  limit: 5
  // ...
}).then(clans => {
  clans.forEach(clan => console.log(clan))
})
```

**Get info about clan**

```js
import { cocAPI } from 'coc-api'
const { clans } = cocAPI(TOKEN)

const clan = clans.getByTag(CLAN_TAG)
clan.getInfo().then(allInfo => {/*...*/})
clan.getMembers().then(members => {/*...*/})
clan.getCurrentWar().then(warInfo => {/*...*/})
clan.getWarLog().then(warLogs => {/*...*/})
clan.getWarLeagueGroup().then(warLeagueInfo => {/*...*/})
clan.getCapitalRaidSeasons().then(raidSeasons => {/*...*/})
```

### Clan war leagues

```js
import { cocAPI } from 'coc-api'
const { clanwarleagues } = cocAPI(TOKEN)

clanwarleagues.getWarLeagueWar('war-tag').then(info => {/*...*/})
```

### Players

**Get info about player**

```js
import { cocAPI } from 'coc-api'
const { players } = cocAPI(TOKEN)

players.getByTag(PLAYER_TAG).then(playerInfo => {/*...*/})
```

**Get info about player clan**

```js
import { cocAPI } from 'coc-api'
const { players } = cocAPI(TOKEN)

players.getByTag(PLAYER_TAG).then(async playerInfo => {
  const clanInfo = await playerInfo.clan.getInfo()
  console.log(clanInfo)
})
```

### Leagues

```js
import { cocAPI, LeagueID, CapitalLeagueID, WarLeagueID } from 'coc-api'
const { leagues } = cocAPI(TOKEN)

leagues.getLeagues().then(leagues => {/*...*/})
leagues.getLeague(LeagueID.Legend).then(info => {/*...*/})
leagues.getLeagueSeasons(LeagueID.Legend).then(seasons => {/*...*/})
leagues.getLeagueSeasonRankings(LeagueID.Legend, 'season-id').then(rankings => {/*...*/})

leagues.getCapitalLeagues().then(capitalLeagues => {/*...*/})
leagues.getCapitalLeague(CapitalLeague.Titan1).then(info => {/*...*/})

leagues.getWarLeagues().then(warLeagues => {/*...*/})
leagues.getWarLeague(WarLeague.Gold1).then(info => {/*...*/})
```

### Locations

```js
import { cocAPI, LocationID } from 'coc-api'
const { locations } = cocAPI(TOKEN)

locations.getList().then(list => {/*...*/})

const location = locations.getByID(LocationID.Europe)
location.getInfo().then(info => {/*...*/})
location.getClanRankings().then(rankings => {/*...*/})
location.getPlayerRankings().then(rankings => {/*...*/})
location.getClanVersusRankings().then(rankings => {/*...*/})
location.getPlayerVersusRankings().then(rankings => {/*...*/})
location.getCapitalRankings().then(rankings => {/*...*/})
```

### Goldpass

```js
import { cocAPI } from 'coc-api'
const { goldpass } = cocAPI(TOKEN)

goldpass.getCurrentSeason().then(info => {/*...*/})
```

### Labels

```js
import { cocAPI } from 'coc-api'
const { labels } = cocAPI(TOKEN)

labels.getClanLabels().then(labels => {/*...*/})
labels.getPlayerLabels().then(labels => {/*...*/})
```
