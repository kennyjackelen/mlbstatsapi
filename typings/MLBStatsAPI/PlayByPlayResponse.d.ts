declare interface PlayByPlayResponse {
  copyright: string;
  allPlays: AllPlay[];
  currentPlay: CurrentPlay;
  scoringPlays: number[];
  playsByInning: PlaysByInning[];
}

interface Result {
  type: string;
  event: string;
  description: string;
  rbi: number;
  awayScore?: number;
  homeScore?: number;
}

interface About {
  atBatIndex: number;
  halfInning: string;
  inning: number;
  startTime: Date;
  endTime: Date;
  isComplete: boolean;
  isScoringPlay: boolean;
  hasReview: boolean;
  hasOut: boolean;
  captivatingIndex: number;
}

interface Count {
  balls: number;
  strikes: number;
  outs: number;
}

interface Player {
  id: number;
  fullName: string;
  link: string;
}

interface BatSide {
  code: string;
  description: string;
}

interface PitchHand {
  code: string;
  description: string;
}

interface Type {
  displayName: string;
}

interface Group {
  displayName: string;
}

interface Zone {
  zone: string;
  color: string;
  temp: string;
  value: string;
}

interface SplitStat {
  name: string;
  zones: Zone[];
}

interface Split {
  stat: SplitStat;
}

interface Stat {
  type: Type;
  group: Group;
  splits: Split[];
}

interface BatterHotColdZoneStats {
  stats: Stat[];
}

interface HotColdZone {
  zone: string;
  color: string;
  temp: string;
}

interface Splits {
  batter: string;
  pitcher: string;
  menOnBase: string;
}

interface Matchup {
  batter: Player;
  batSide: BatSide;
  pitcher: Player;
  pitchHand: PitchHand;
  batterHotColdZoneStats: BatterHotColdZoneStats;
  batterHotColdZones: HotColdZone[];
  pitcherHotColdZones: HotColdZone[];
  splits: Splits;
}

interface Movement {
  start: string;
  end: string;
}

interface RunnerDetails {
  event: string;
  runner: Player;
  isScoringEvent: boolean;
  rbi: boolean;
  earned: boolean;
}

interface Runner {
  movement: Movement;
  details: PlayDetails;
}

interface Call {
  code: string;
  description: string;
}

interface PitchType {
  code: string;
  description: string;
}

interface PlayDetails {
  call: Call;
  description: string;
  code: string;
  ballColor: string;
  trailColor: string;
  isInPlay: boolean;
  isStrike: boolean;
  isBall: boolean;
  type: PitchType;
  hasReview: boolean;
  fromCatcher?: boolean;
  event: string;
  awayScore?: number;
  homeScore?: number;
  isScoringPlay?: boolean;
}

interface PitchCoordinates {
  aY: number;
  aZ: number;
  pfxX: number;
  pfxZ: number;
  pX: number;
  pZ: number;
  vX0: number;
  vY0: number;
  vZ0: number;
  x: number;
  y: number;
  x0: number;
  y0: number;
  z0: number;
  aX: number;
}

interface Break {
  breakAngle: number;
  breakLength: number;
  breakY: number;
}

interface PitchData {
  startSpeed: number;
  endSpeed: number;
  nastyFactor: number;
  strikeZoneTop: number;
  strikeZoneBottom: number;
  coordinates: PitchCoordinates;
  breaks: Break;
}

interface HitData {
  launchSpeed: number;
  launchAngle: number;
  totalDistance: number;
}

interface PlayEvent {
  details: PlayDetails;
  count: Count;
  pitchData: PitchData;
  index: number;
  pfxId: string;
  playId: string;
  pitchNumber: number;
  startTime: Date;
  endTime: Date;
  isPitch: boolean;
  type: string;
  hitData: HitData;
}

interface AllPlay {
  result: Result;
  about: About;
  count: Count;
  matchup: Matchup;
  pitchIndex: number[];
  actionIndex: number[];
  runnerIndex: number[];
  runners: Runner[];
  playEvents: PlayEvent[];
}

interface HotColdZone {
  zone: string;
  color: string;
  temp: string;
  value: string;
}

interface CurrentPlay {
  result: Result;
  about: About;
  count: Count;
  matchup: Matchup;
  pitchIndex: number[];
  actionIndex: number[];
  runnerIndex: number[];
  runners: Runner[];
  playEvents: PlayEvent[];
}

interface SpringLeague {
  id: number;
  name: string;
  link: string;
  abbreviation: string;
}

interface Team {
  id: number;
  name: string;
  link: string;
  springLeague: SpringLeague;
}

interface HitCoordinates {
  x: number;
  y: number;
}

interface HitDetail {
  team: Team;
  inning: number;
  pitcher: Player;
  batter: Player;
  coordinates: HitCoordinates;
  type: string;
  description: string;
}

interface Hits {
  away: HitDetail[];
  home: HitDetail[];
}

interface PlaysByInning {
  startIndex: number;
  endIndex: number;
  top: number[];
  bottom: number[];
  hits: Hits;
}
