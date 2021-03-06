export interface ISeasonResponse {
  copyright: string;
  seasons: Season[];
}

/* tslint:disable interface-name */

export interface Season {
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
