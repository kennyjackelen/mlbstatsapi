export interface IScheduleResponse {
    copyright: string;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalGamesInProgress: number;
    dates: IScheduleDate[];
}
export interface IScheduleDate {
    date: string;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalGamesInProgress: number;
    games: IScheduleGame[];
    events: any[];
}
export interface IScheduleGame {
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
export interface Status {
    abstractGameState: string;
    codedGameState: string;
    detailedState: string;
    statusCode: string;
    abstractGameCode: string;
    reason: string;
}
export interface LeagueRecord {
    wins: number;
    losses: number;
    pct: string;
}
export interface Team {
    id: number;
    name: string;
    link: string;
}
export interface TeamDetail {
    leagueRecord: LeagueRecord;
    score: number;
    team: Team;
    isWinner: boolean;
    splitSquad: boolean;
    seriesNumber: number;
}
export interface Teams {
    away: TeamDetail;
    home: TeamDetail;
}
export interface Venue {
    id: number;
    name: string;
    link: string;
}
export interface Content {
    link: string;
}
