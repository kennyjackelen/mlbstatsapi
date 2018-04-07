declare interface SeasonResponse {
  copyright: string;
  seasons: Season[];
}

interface Season {
  seasonId: string;
  hasWildcard: boolean;
  regularSeasonStartDate: string;
  regularSeasonEndDate: string;
  preSeasonStartDate: string;
  preSeasonEndDate: string;
  postSeasonStartDate: string;
  postSeasonEndDate: string;
  seasonStartDate: string;
  seasonEndDate: string;
}