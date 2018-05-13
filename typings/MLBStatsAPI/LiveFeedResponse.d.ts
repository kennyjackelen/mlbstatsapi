/*
  This file probably is not 100% accurate.  It works for my current purposes
  but could probably use improvement.
*/

declare interface LiveFeedResponse {
  copyright: string;
  metaData: LiveFeed.MetaData;
  gameData: LiveFeed.GameData;
  liveData: LiveFeed.LiveData;
}

declare namespace LiveFeed {

  export interface MetaData {
    dfeEvents: any[];
    logicalEvents: any[];
    timeStamp: string;
    wait: string;
  }

  export interface TeamChallenges {
    used: string;
    remaining: string;
  }

  export interface Challenges {
    hasChallenges: boolean;
    away: TeamChallenges;
    home: TeamChallenges;
    challengingTeam?: any;
  }

  export interface Status {
    abstractGameState: string;
    codedGameState: string;
    detailedState: string;
    statusCode: string;
    reason?: any;
    challenges: Challenges;
  }

  export interface Flags {
    perfectGame: boolean;
    noHitter: boolean;
  }

  export interface Alert {
    description: string;
    shortDescription: string;
    type: string;
    category: string;
    teamId?: any;
    alertId: string;
  }

  export interface TeamLinks {
    preview: string;
    recap: string;
  }

  export interface Media {
    free: boolean;
    title: string;
    thumbnail: string;
    start: Date;
    mlbtv: boolean;
    type: string;
  }

  export interface Links {
    dataDirectory: string;
    away: TeamLinks;
    home: TeamLinks;
    preview: string;
    wrap: string;
    media: Media;
  }

  export interface Game {
    pk: string;
    id: string;
    doubleHeader: string;
    type: string;
    gamedayType: string;
    tiebreaker: string;
    gameNumber: string;
    calendarEventID: string;
    season: string;
    seasonDisplay: string;
  }

  export interface LeagueDatetime {
    ampm: string;
    time: string;
    timeDate: string;
    timeZone: string;
    timeZoneGen: string;
  }

  export interface TeamDatetime {
    ampm: string;
    time: string;
    timeZone: string;
    league: LeagueDatetime;
  }

  export interface Datetime {
    ampm: string;
    day: string;
    firstPitchET: string;
    originalDate: string;
    resumeDate?: any;
    time: string;
    timeGMT?: any;
    timeDate: string;
    timeZone: string;
    away: TeamDatetime;
    home: TeamDatetime;
    dayNight: string;
  }

  export interface Weather {
    condition: string;
    temp: string;
    wind: string;
  }

  export interface Venue {
    id: string;
    location: string;
    name: string;
    channelLoc: string;
  }

  export interface Name {
    abbrev: string;
    display: string;
    full: string;
    brief: string;
    city: string;
  }

  export interface Record {
    wins: string;
    losses: string;
    gamesBack: string;
    gamesBackWildcard: string;
  }

  export interface Team {
    division: string;
    fileCode: string;
    leagueID: string;
    sportCode: string;
    teamID: string;
    team: string;
    divisionID: string;
    league: string;
    name: Name;
    record: Record;
  }

  export interface TeamsByID {
    [id: number]: string;
  }

  export interface Teams {
    away: Team;
    home: Team;
    teamsByID: TeamsByID;
  }

  export interface GameData {
    status: Status;
    flags: Flags;
    alerts: Alert[];
    links: Links;
    game: Game;
    datetime: Datetime;
    weather: Weather;
    venue: Venue;
    teams: Teams;
  }

  export interface About {
    atBatIndex: number;
    halfInning: string;
    inning: string;
    startTfs: string;
    endTfs: number;
    isComplete: boolean;
    isScoringPlay: boolean;
    hasReview: boolean;
  }

  export interface Count {
    balls: string;
    strikes: string;
    outs: string;
  }

  export interface HotColdZones {
    batter?: any;
    pitcher?: any;
  }

  export interface RightLeft {
    batter: string;
    pitcher: string;
  }

  export interface Matchup {
    batter: string;
    pitcher: string;
    hotColdZones: HotColdZones;
    splits?: any;
    rightLeft: RightLeft;
  }

  export interface Result {
    type: string;
    event: string;
    brief: string;
    description: string;
    rbi: number;
  }

  export interface Movement {
    start: string;
    end: string;
  }

  export interface Details {
    event: string;
    runner: string;
    isScoringEvent: boolean;
    rbi: boolean;
    earned: boolean;
  }

  export interface Runner {
    movement: Movement;
    details: Details;
  }

  export interface Play {
    about: About;
    count: Count;
    matchup: Matchup;
    result: Result;
    runnerIndex: number[];
    runners: Runner[];
    actions: any[];
    pitches: any[];
    playEvents: any[];
  }

  export interface Batter {
    zone: string;
    sweetness: string;
    avg: string;
    ops: string;
    temperature: string;
    color: string;
  }

  export interface Pitcher {
    zone: string;
    sweetness: string;
    avg: string;
    ops: string;
    temperature: string;
    color: string;
  }

  export interface Splits {
    batter: string;
    menOnBase: string;
    pitcher: string;
  }

  export interface Hits {
    home: any[];
    away: any[];
  }

  export interface PlaysByInning {
    startIndex: number;
    top: number[];
    bottom: any[];
    hits: Hits;
    endIndex: number;
  }

  export interface Plays {
    allPlays: Play[];
    currentPlay: Play;
    playsByInning: PlaysByInning[];
    scoringPlays: any[];
  }

  export interface GameNote {
    label: string;
    value: string;
  }

  export interface GameInfoParsed {
    pitchingNotes: any[];
    gameNotes: GameNote[];
  }

  export interface BattingTotals {
    avg: string;
    obp: string;
    slg: string;
    ops: string;
    atBats: string;
    hits: string;
    baseOnBalls: string;
    doubles: string;
    triples: string;
    homeRuns: string;
    assists: string;
    leftOnBase: string;
    putOuts: string;
    runs: string;
    rbi: string;
    strikeOuts: string;
  }

  export interface PitchingTotals {
    inningsPitched: string;
    baseOnBalls: string;
    battersFaced: string;
    earnedRuns: string;
    era: string;
    hits: string;
    homeRuns: string;
    outs: string;
    runs: string;
    strikeOuts: string;
  }

  export interface Batting {
    note?: any;
    atBats: string;
    baseOnBalls: string;
    battingOrder: string;
    caughtStealing: string;
    doubles: string;
    flyOuts: string;
    groundOuts?: any;
    hits: string;
    hitByPitch: string;
    homeRuns: string;
    leftOnBase: string;
    runs: string;
    rbi: string;
    sacBunts: string;
    sacFlys: string;
    stolenBases: string;
    strikeOuts: string;
    triples: string;
  }

  export interface Pitching {
    note?: any;
    outs?: any;
    battersFaced?: any;
    earnedRuns?: any;
    runs?: any;
    hits?: any;
    inningsPitched?: any;
    strikeOuts?: any;
    homeRuns?: any;
    baseOnBalls?: any;
    pitchesThrown?: any;
    strikes?: any;
    balls?: any;
  }

  export interface Fielding {
    errors: string;
    assists: string;
    putOuts: string;
  }

  export interface GameStats {
    batting: Batting;
    pitching: Pitching;
    fielding: Fielding;
  }

  export interface BattingSeasonStats {
    avg: string;
    obp: string;
    slg: string;
    ops: string;
    atBats?: any;
    runs: string;
    doubles?: any;
    triples?: any;
    homeRuns: string;
    strikeOuts: string;
    baseOnBalls: string;
    hits: string;
    putOuts?: any;
    rbi: string;
    fielding: string;
    caughtStealing?: any;
    stolenBases?: any;
  }

  export interface PitchingSeasonStats {
    holds?: any;
    era?: any;
    wins?: any;
    losses?: any;
    saves?: any;
    blownSaves?: any;
    inningsPitched?: any;
    hits?: any;
    runs?: any;
    earnedRuns?: any;
    baseOnBalls?: any;
    strikeOuts?: any;
    whip?: any;
  }

  export interface FieldingSeasonStats {
    fielding: string;
  }

  export interface SeasonStats {
    batting: BattingSeasonStats;
    pitching: PitchingSeasonStats;
    fielding: FieldingSeasonStats;
  }

  export interface Official {
    id: string;
    position: string;
    last: string;
    name: string;
    first: string;
  }

  export interface Boxscore {
    gameInfo: string;
    gameInfoParsed: GameInfoParsed;
    teams: Teams;
    officials: Official[];
  }

  export interface Innings {
    away: string;
    num: string;
    ordinalNum: string;
  }

  export interface TeamLinescore {
    id: string;
    runs: string;
    hits: string;
    errors: string;
  }

  export interface Pitchers {
    win?: any;
    loss?: any;
    save?: any;
  }

  export interface Linescore {
    currentInning: number;
    currentInningOrdinal: string;
    inningState: string;
    innings: Innings[];
    inningHalf: string;
    away: TeamLinescore;
    home: TeamLinescore;
    pitchers: Pitchers;
  }

  export interface Player {
    name: Name;
    id: string;
    position: string;
    batterPitcher: string;
    shirtNum: string;
    uniformID: string;
    height?: any;
    rightLeft: string;
    stands: string;
  }

  export interface Players {
    [playerID:string] : Player
  }

  export interface Offense {
    batter: string;
    onDeck: string;
    inHole: string;
    first?: any;
    second?: any;
    third?: any;
    teamID: string;
    team: string;
  }

  export interface Defense {
    teamID: string;
    team: string;
    pitcher: string;
    catcher: string;
    first: string;
    second: string;
    short: string;
    third: string;
    left: string;
    center: string;
    right: string;
  }

  export interface LivePlayers {
    allPlayers: Players;
    offense: Offense;
    defense: Defense;
  }

  export interface HitDistance {
    value?: any;
    player?: any;
  }

  export interface HitSpeed {
    value?: any;
    player?: any;
  }

  export interface PitchSpeed {
    value?: any;
    player?: any;
  }

  export interface Leaders {
    hitDistance: HitDistance;
    hitSpeed: HitSpeed;
    pitchSpeed: PitchSpeed;
  }

  export interface LiveData {
    plays: Plays;
    boxscore: Boxscore;
    linescore: Linescore;
    players: LivePlayers;
    leaders: Leaders;
  }

}

