import * as rp from 'request-promise';
import {
  ILinescoreResponse,
  IBoxscoreResponse,
  IPlayByPlayResponse,
  IPlay,
  IScheduleDate,
  IScheduleGame,
  IScheduleResponse,
  ISeasonResponse,
  ITeamListResponse,
} from './interfaces';

export namespace MLBStatsAPI {

  const BASE_URL = 'https://statsapi.mlb.com/api/v1';
  export type SeasonID = number | string;
  export type LinescoreResponse = ILinescoreResponse;
  export type BoxscoreResponse = IBoxscoreResponse;
  export type Play = IPlay;
  export type PlayByPlayResponse = IPlayByPlayResponse;
  export type ScheduleDate = IScheduleDate;
  export type ScheduleGame = IScheduleGame;
  export type ScheduleResponse = IScheduleResponse;
  export type SeasonResponse = ISeasonResponse;
  export type TeamListResponse = ITeamListResponse;

  /**
   * Given a season, gets the date range for the regular season schedule.
   * @param seasonID
   */
  async function getSeasonDateRange( seasonID: SeasonID ): Promise<IDateRange> {
    const URL = `${BASE_URL}/seasons/${seasonID}?sportId=1`;
    const response: ISeasonResponse = await rp( URL, { json: true } );
    const startDate = new Date( response.seasons[0].regularSeasonStartDate );
    const endDate = new Date( response.seasons[0].regularSeasonEndDate );
    return { startDate: startDate, endDate: endDate };
  }

  /**
   * Gets the play-by-play data for a given game.
   * @param game
   */
  export async function getPlayByPlay( game: IScheduleGame ): Promise<IPlayByPlayResponse>;

  /**
   * Gets the play-by-play data for a given game.
   * @param gamePK
   */
  /* tslint:disable-next-line unified-signatures */
  export async function getPlayByPlay( gamePK: number ): Promise<IPlayByPlayResponse>;
  export async function getPlayByPlay( game: IScheduleGame | number ): Promise<IPlayByPlayResponse> {
    let gamePK = ( typeof ( game ) === 'number' ) ? game : game.gamePk;
    const URL = `${BASE_URL}/game/${gamePK}/playByPlay`;
    const response: IPlayByPlayResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Gets the linescore data for a given game.
   * @param game
   */
  export async function getLinescore( game: IScheduleGame ): Promise<ILinescoreResponse>;

  /**
   * Gets the linescore data for a given game.
   * @param gamePK
   */
  /* tslint:disable-next-line unified-signatures */
  export async function getLinescore( gamePK: number ): Promise<ILinescoreResponse>;
  export async function getLinescore( game: IScheduleGame | number ): Promise<ILinescoreResponse> {
    let gamePK = ( typeof ( game ) === 'number' ) ? game : game.gamePk;
    const URL = `${BASE_URL}/game/${gamePK}/linescore`;
    const response: ILinescoreResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Gets the boxscore data for a given game.
   * @param game
   */
  export async function getBoxscore( game: IScheduleGame ): Promise<IBoxscoreResponse>;

  /**
   * Gets the boxscore data for a given game.
   * @param gamePK
   */
  /* tslint:disable-next-line unified-signatures */
  export async function getBoxscore( gamePK: number ): Promise<IBoxscoreResponse>;
  export async function getBoxscore( game: IScheduleGame | number ): Promise<IBoxscoreResponse> {
    let gamePK = ( typeof ( game ) === 'number' ) ? game : game.gamePk;
    const URL = `${BASE_URL}/game/${gamePK}/boxscore`;
    const response: IBoxscoreResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Gets the schedule for an entire season.
   * @param seasonID
   */
  export async function getSchedule( seasonID?: SeasonID ): Promise<IScheduleResponse> {
    let dateRange: IDateRange;
    dateRange = await getSeasonDateRange( seasonID );
    const startDateStr = FormatDate( dateRange.startDate );
    const endDateStr = FormatDate( dateRange.endDate );
    const URL = `${BASE_URL}/schedule?sportId=1&startDate=${startDateStr}&endDate=${endDateStr}`;
    const response: IScheduleResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Gets the schedule for today's games.
   */
  export async function getCurrentSchedule(): Promise<IScheduleResponse> {
    const URL = `${BASE_URL}/schedule?sportId=1&useLatestGames=true`;
    const response: IScheduleResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Gets the schedule for today's games.
   */
  export async function getListOfTeams(): Promise<ITeamListResponse> {
    const URL = `${BASE_URL}/teams?sportId=1`;
    const response: ITeamListResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Formats a date object in MM/DD/YYYY format, as expected by the MLB Stats API.
   * @param d
   */
  function FormatDate( d: Date ): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return d.toLocaleDateString( 'en-US', options );
  }

  /**
   * Represents a range of dates
   */
  export interface IDateRange {
    startDate: Date;
    endDate: Date;
  }
}
