import { ILinescoreResponse, IPlayByPlayResponse, IPlay, IScheduleDate, IScheduleGame, IScheduleResponse, ISeasonResponse, ITeamListResponse } from './interfaces';
export declare namespace MLBStatsAPI {
    type SeasonID = number | string;
    type LinescoreResponse = ILinescoreResponse;
    type Play = IPlay;
    type PlayByPlayResponse = IPlayByPlayResponse;
    type ScheduleDate = IScheduleDate;
    type ScheduleGame = IScheduleGame;
    type ScheduleResponse = IScheduleResponse;
    type SeasonResponse = ISeasonResponse;
    type TeamListResponse = ITeamListResponse;
    /**
     * Gets the play-by-play data for a given game.
     * @param game
     */
    function getPlayByPlay(game: IScheduleGame): Promise<IPlayByPlayResponse>;
    /**
     * Gets the play-by-play data for a given game.
     * @param gamePK
     */
    function getPlayByPlay(gamePK: number): Promise<IPlayByPlayResponse>;
    /**
     * Gets the linescore data for a given game.
     * @param game
     */
    function getLinescore(game: IScheduleGame): Promise<ILinescoreResponse>;
    /**
     * Gets the linescore data for a given game.
     * @param gamePK
     */
    function getLinescore(gamePK: number): Promise<ILinescoreResponse>;
    /**
     * Gets the schedule for an entire season.
     * @param seasonID
     */
    function getSchedule(seasonID?: SeasonID): Promise<IScheduleResponse>;
    /**
     * Gets the schedule for today's games.
     */
    function getCurrentSchedule(): Promise<IScheduleResponse>;
    /**
     * Gets the schedule for today's games.
     */
    function getListOfTeams(): Promise<ITeamListResponse>;
    /**
     * Represents a range of dates
     */
    interface IDateRange {
        startDate: Date;
        endDate: Date;
    }
}
