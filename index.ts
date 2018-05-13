/// <reference path="./typings/MLBStatsAPI/LinescoreResponse.d.ts" />
/// <reference path="./typings/MLBStatsAPI/LiveFeedResponse.d.ts" />
/// <reference path="./typings/MLBStatsAPI/PlayByPlayResponse.d.ts" />
/// <reference path="./typings/MLBStatsAPI/ScheduleResponse.d.ts" />
/// <reference path="./typings/MLBStatsAPI/SeasonResponse.d.ts" />
/// <reference path="./typings/MLBStatsAPI/TeamListResponse.d.ts" />

import * as rp from 'request-promise';

export namespace MLBStatsAPI {

  const BASE_URL = 'https://statsapi.mlb.com/api/v1';
  export type SeasonID = number | string;

  /**
   * Given a season, gets the date range for the regular season schedule.
   * @param seasonID 
   */
  async function getSeasonDateRange( seasonID: SeasonID ): Promise<DateRange> {
    const URL = `${BASE_URL}/seasons/${seasonID}?sportId=1`;
    const response: SeasonResponse = await rp( URL, { json: true } );
    const startDate = new Date( response.seasons[0].regularSeasonStartDate );
    const endDate = new Date( response.seasons[0].regularSeasonEndDate );
    return { startDate: startDate, endDate: endDate };
  }

  /**
   * Gets the play-by-play data for a given game.
   * @param game 
   */
  export async function getPlayByPlay( game: Game ): Promise<PlayByPlayResponse>;

  /**
   * Gets the play-by-play data for a given game.
   * @param gamePK 
   */
  export async function getPlayByPlay( gamePK: number ): Promise<PlayByPlayResponse>;
  export async function getPlayByPlay( game: Game | number ): Promise<PlayByPlayResponse> {
    let gamePK = ( typeof ( game ) === 'number' ) ? game : game.gamePk;
    const URL = `${BASE_URL}/game/${gamePK}/playByPlay`;
    const response: PlayByPlayResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Gets the linescore data for a given game.
   * @param game 
   */
  export async function getLinescore( game: Game ): Promise<LinescoreResponse>;

  /**
   * Gets the linescore data for a given game.
   * @param gamePK 
   */
  export async function getLinescore( gamePK: number ): Promise<LinescoreResponse>;
  export async function getLinescore( game: Game | number ): Promise<LinescoreResponse> {
    let gamePK = ( typeof ( game ) === 'number' ) ? game : game.gamePk;
    const URL = `${BASE_URL}/game/${gamePK}/linescore`;
    const response: LinescoreResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Gets the live feed data for a given game.
   * @param game 
   */
  export async function getLiveFeed( game: Game ): Promise<LiveFeedResponse>;

  /**
   * Gets the live feed data for a given game.
   * @param gamePK 
   */
  export async function getLiveFeed( gamePK: number ): Promise<LiveFeedResponse>;
  export async function getLiveFeed( game: Game | number ): Promise<LiveFeedResponse> {
    let gamePK = ( typeof ( game ) === 'number' ) ? game : game.gamePk;
    const URL = `${BASE_URL}/game/${gamePK}/feed/live`;
    const response: LiveFeedResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Gets the schedule for an entire season.
   * @param seasonID
   */
  export async function getSchedule( seasonID?: SeasonID ): Promise<ScheduleResponse> {
    let dateRange: DateRange;
    dateRange = await getSeasonDateRange( seasonID );
    const startDateStr = FormatDate( dateRange.startDate );
    const endDateStr = FormatDate( dateRange.endDate );
    const URL = `${BASE_URL}/schedule?sportId=1&startDate=${startDateStr}&endDate=${endDateStr}`;
    const response: ScheduleResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Gets the schedule for today's games.
   */
  export async function getCurrentSchedule(): Promise<ScheduleResponse> {
    const URL = `${BASE_URL}/schedule?sportId=1&useLatestGames=true`;
    const response: ScheduleResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Gets the schedule for today's games.
   */
  export async function getListOfTeams(): Promise<TeamListResponse> {
    const URL = `${BASE_URL}/teams?sportId=1`;
    const response: TeamListResponse = await rp( URL, { json: true } );
    return response;
  }

  /**
   * Formats a date object in MM/DD/YYYY format, as expected by the MLB Stats API.
   * @param d 
   */
  function FormatDate( d: Date ): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    return d.toLocaleDateString( 'en-US', options );
  }

  /**
   * Represents a range of dates
   */
  export interface DateRange {
    startDate: Date;
    endDate: Date;
  }
}
