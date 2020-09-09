"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
var MLBStatsAPI;
(function (MLBStatsAPI) {
    const BASE_URL = 'https://statsapi.mlb.com/api/v1';
    /**
     * Given a season, gets the date range for the regular season schedule.
     * @param seasonID
     */
    async function getSeasonDateRange(seasonID) {
        const URL = `${BASE_URL}/seasons/${seasonID}?sportId=1`;
        const response = await rp(URL, { json: true });
        const startDate = new Date(response.seasons[0].regularSeasonStartDate);
        const endDate = new Date(response.seasons[0].regularSeasonEndDate);
        return { startDate: startDate, endDate: endDate };
    }
    async function getPlayByPlay(game) {
        let gamePK = (typeof (game) === 'number') ? game : game.gamePk;
        const URL = `${BASE_URL}/game/${gamePK}/playByPlay`;
        const response = await rp(URL, { json: true });
        return response;
    }
    MLBStatsAPI.getPlayByPlay = getPlayByPlay;
    async function getLinescore(game) {
        let gamePK = (typeof (game) === 'number') ? game : game.gamePk;
        const URL = `${BASE_URL}/game/${gamePK}/linescore`;
        const response = await rp(URL, { json: true });
        return response;
    }
    MLBStatsAPI.getLinescore = getLinescore;
    async function getBoxscore(game) {
        let gamePK = (typeof (game) === 'number') ? game : game.gamePk;
        const URL = `${BASE_URL}/game/${gamePK}/boxscore`;
        const response = await rp(URL, { json: true });
        return response;
    }
    MLBStatsAPI.getBoxscore = getBoxscore;
    /**
     * Gets the schedule for an entire season.
     * @param seasonID
     */
    async function getSchedule(seasonID) {
        let dateRange;
        dateRange = await getSeasonDateRange(seasonID);
        const startDateStr = FormatDate(dateRange.startDate);
        const endDateStr = FormatDate(dateRange.endDate);
        const URL = `${BASE_URL}/schedule?sportId=1&startDate=${startDateStr}&endDate=${endDateStr}`;
        const response = await rp(URL, { json: true });
        return response;
    }
    MLBStatsAPI.getSchedule = getSchedule;
    /**
     * Gets the schedule for today's games.
     */
    async function getCurrentSchedule() {
        const URL = `${BASE_URL}/schedule?sportId=1&useLatestGames=true`;
        const response = await rp(URL, { json: true });
        return response;
    }
    MLBStatsAPI.getCurrentSchedule = getCurrentSchedule;
    /**
     * Gets the schedule for today's games.
     */
    async function getListOfTeams() {
        const URL = `${BASE_URL}/teams?sportId=1`;
        const response = await rp(URL, { json: true });
        return response;
    }
    MLBStatsAPI.getListOfTeams = getListOfTeams;
    /**
     * Formats a date object in MM/DD/YYYY format, as expected by the MLB Stats API.
     * @param d
     */
    function FormatDate(d) {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        };
        return d.toLocaleDateString('en-US', options);
    }
})(MLBStatsAPI = exports.MLBStatsAPI || (exports.MLBStatsAPI = {}));
