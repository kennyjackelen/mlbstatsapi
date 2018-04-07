declare interface LinescoreResponse {
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

interface Score {
  runs: number;
}

interface Inning {
  num: number;
  ordinalNum: string;
  home: Score;
  away: Score;
}

interface Linescore {
  runs: number;
  hits: number;
  errors: number;
}

interface LinescoreTeams {
  home: Linescore;
  away: Linescore;
}

interface Player {
  id: number;
  fullName: string;
  link: string;
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

interface Defense {
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

interface Offense {
  batter: Player;
  onDeck: Player;
  inHole: Player;
  second: Player;
  third: Player;
  pitcher: Player;
  team: Player;
}
