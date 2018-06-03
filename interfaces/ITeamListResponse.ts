export interface ITeamListResponse {
  copyright: string;
  teams: Team[];
}

/* tslint:disable interface-name */

export interface Venue {
  id: number;
  name: string;
  link: string;
}

export interface League {
  id: number;
  name: string;
  link: string;
}

export interface Division {
  id: number;
  name: string;
  link: string;
}

export interface Sport {
  id: number;
  link: string;
  name: string;
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
  venue: Venue;
  teamCode: string;
  fileCode: string;
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  league: League;
  division: Division;
  sport: Sport;
  shortName: string;
  springLeague: SpringLeague;
  active: boolean;
}
