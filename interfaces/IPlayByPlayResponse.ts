export interface IPlayByPlayResponse {
  copyright: string;
  allPlays: IPlay[];
  currentPlay: IPlay;
  scoringPlays: number[];
  playsByInning: PlaysByInning[];
}

export interface IPlay {
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

/* tslint:disable interface-name */

export interface Result {
  type: string;
  event: string;
  description: string;
  rbi: number;
  awayScore?: number;
  homeScore?: number;
}

export interface About {
  atBatIndex: number;
  halfInning: 'top' | 'bottom';
  inning: number;
  startTime: Date;
  endTime: Date;
  isComplete: boolean;
  isScoringPlay: boolean;
  hasReview: boolean;
  hasOut: boolean;
  captivatingIndex: number;
}

export interface Count {
  balls: number;
  strikes: number;
  outs: number;
}

export interface Player {
  id: number;
  fullName: string;
  link: string;
}

export interface BatSide {
  code: string;
  description: string;
}

export interface PitchHand {
  code: string;
  description: string;
}

export interface Type {
  displayName: string;
}

export interface Group {
  displayName: string;
}

export interface Zone {
  zone: string;
  color: string;
  temp: string;
  value: string;
}

export interface SplitStat {
  name: string;
  zones: Zone[];
}

export interface Split {
  stat: SplitStat;
}

export interface Stat {
  type: Type;
  group: Group;
  splits: Split[];
}

export interface BatterHotColdZoneStats {
  stats: Stat[];
}

export interface HotColdZone {
  zone: string;
  color: string;
  temp: string;
}

export interface Splits {
  batter: string;
  pitcher: string;
  menOnBase: string;
}

export interface Matchup {
  batter: Player;
  batSide: BatSide;
  pitcher: Player;
  pitchHand: PitchHand;
  batterHotColdZoneStats: BatterHotColdZoneStats;
  batterHotColdZones: HotColdZone[];
  pitcherHotColdZones: HotColdZone[];
  splits: Splits;
}

export interface Movement {
  start: string;
  end: string;
}

export interface RunnerDetails {
  event: string;
  runner: Player;
  isScoringEvent: boolean;
  rbi: boolean;
  earned: boolean;
}

export interface Runner {
  movement: Movement;
  details: RunnerDetails;
}

export interface Call {
  code: string;
  description: string;
}

export interface PitchType {
  code: string;
  description: string;
}

export interface PlayDetails {
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

export interface PitchCoordinates {
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

export interface Break {
  breakAngle: number;
  breakLength: number;
  breakY: number;
}

export interface PitchData {
  startSpeed: number;
  endSpeed: number;
  nastyFactor: number;
  strikeZoneTop: number;
  strikeZoneBottom: number;
  coordinates: PitchCoordinates;
  breaks: Break;
}

export interface HitData {
  launchSpeed: number;
  launchAngle: number;
  totalDistance: number;
}

export interface PlayEvent {
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

export interface HotColdZone {
  zone: string;
  color: string;
  temp: string;
  value: string;
}

export interface SpringLeague {
  id: number;
  name: string;
  link: string;
  abbreviation: string;
}

export interface Team {
  id: number;
  name: string;
  link: string;
  springLeague: SpringLeague;
}

export interface HitCoordinates {
  x: number;
  y: number;
}

export interface HitDetail {
  team: Team;
  inning: number;
  pitcher: Player;
  batter: Player;
  coordinates: HitCoordinates;
  type: string;
  description: string;
}

export interface Hits {
  away: HitDetail[];
  home: HitDetail[];
}

export interface PlaysByInning {
  startIndex: number;
  endIndex: number;
  top: number[];
  bottom: number[];
  hits: Hits;
}
