declare interface TeamListResponse {
  copyright: string;
  teams: Team[];
}

interface Venue {
  id: number;
  name: string;
  link: string;
}

interface League {
  id: number;
  name: string;
  link: string;
}

interface Division {
  id: number;
  name: string;
  link: string;
}

interface Sport {
  id: number;
  link: string;
  name: string;
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
