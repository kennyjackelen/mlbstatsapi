declare interface ScheduleResponse {
  copyright: string;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalGamesInProgress: number;
  dates: ScheduleResponseDate[];
}

interface Status {
  abstractGameState: string;
  codedGameState: string;
  detailedState: string;
  statusCode: string;
  abstractGameCode: string;
  reason: string;
}

interface LeagueRecord {
  wins: number;
  losses: number;
  pct: string;
}

interface Team {
  id: number;
  name: string;
  link: string;
}

interface TeamDetail {
  leagueRecord: LeagueRecord;
  score: number;
  team: Team;
  isWinner: boolean;
  splitSquad: boolean;
  seriesNumber: number;
}

interface Teams {
  away: TeamDetail;
  home: TeamDetail;
}

interface Venue {
  id: number;
  name: string;
  link: string;
}

interface Content {
  link: string;
}

interface Game {
  gamePk: number;
  link: string;
  gameType: string;
  season: string;
  gameDate: Date;
  status: Status;
  teams: Teams;
  venue: Venue;
  content: Content;
  isTie: boolean;
  doubleHeader: string;
  gamedayType: string;
  tiebreaker: string;
  gameNumber: number;
  calendarEventID: string;
  seasonDisplay: string;
  dayNight: string;
  scheduledInnings: number;
  gamesInSeries: number;
  seriesGameNumber: number;
  seriesDescription: string;
  recordSource: string;
  ifNecessary: string;
  ifNecessaryDescription: string;
  rescheduleDate?: Date;
}

interface ScheduleResponseDate {
  date: string;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalGamesInProgress: number;
  games: Game[];
  events: any[];
}