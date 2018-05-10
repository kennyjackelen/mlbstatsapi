/// <reference path="typings/MLBStatsAPI/LinescoreResponse.d.ts" />
/// <reference path="typings/MLBStatsAPI/PlayByPlayResponse.d.ts" />
/// <reference path="typings/MLBStatsAPI/ScheduleResponse.d.ts" />
/// <reference path="typings/MLBStatsAPI/SeasonResponse.d.ts" />
/// <reference path="typings/MLBStatsAPI/TeamListResponse.d.ts" />
export declare namespace MLBStatsAPI {
    type SeasonID = number | string;
    /**
     * Gets the play-by-play data for a given game.
     * @param game
     */
    function getPlayByPlay(game: Game): Promise<PlayByPlayResponse>;
    /**
     * Gets the play-by-play data for a given game.
     * @param gamePK
     */
    function getPlayByPlay(gamePK: number): Promise<PlayByPlayResponse>;
    /**
     * Gets the linescore data for a given game.
     * @param game
     */
    function getLinescore(game: Game): Promise<LinescoreResponse>;
    /**
     * Gets the linescore data for a given game.
     * @param gamePK
     */
    function getLinescore(gamePK: number): Promise<LinescoreResponse>;
    /**
     * Gets the schedule for an entire season.
     * @param seasonID
     */
    function getSchedule(seasonID?: SeasonID): Promise<ScheduleResponse>;
    /**
     * Gets the schedule for today's games.
     */
    function getCurrentSchedule(): Promise<ScheduleResponse>;
    /**
     * Gets the schedule for today's games.
     */
    function getListOfTeams(): Promise<TeamListResponse>;
    /**
     * Represents a range of dates
     */
    interface DateRange {
        startDate: Date;
        endDate: Date;
    }
}
