export interface ILinescoreResponse {
    copyright: string;
    currentInning: number;
    currentInningOrdinal: string;
    inningHalf: string;
    isTopInning: boolean;
    scheduledInnings: number;
    innings: Inning[];
    teams: LinescoreTeams;
    defense: Defense;
    offense: Offense;
    balls: number;
    strikes: number;
    outs: number;
}
export interface Score {
    runs: number;
}
export interface Inning {
    num: number;
    ordinalNum: string;
    home: Score;
    away: Score;
}
export interface Linescore {
    runs: number;
    hits: number;
    errors: number;
}
export interface LinescoreTeams {
    home: Linescore;
    away: Linescore;
}
export interface Player {
    id: number;
    fullName: string;
    link: string;
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
export interface Defense {
    pitcher: Player;
    catcher: Player;
    first: Player;
    second: Player;
    third: Player;
    shortstop: Player;
    left: Player;
    center: Player;
    right: Player;
    team: Team;
}
export interface Offense {
    batter: Player;
    onDeck: Player;
    inHole: Player;
    first: Player;
    second: Player;
    third: Player;
    pitcher: Player;
    team: Player;
}
