"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var rp = require("request-promise");
var MLBStatsAPI;
(function (MLBStatsAPI) {
    var BASE_URL = 'https://statsapi.mlb.com/api/v1';
    /**
     * Given a season, gets the date range for the regular season schedule.
     * @param seasonID
     */
    function getSeasonDateRange(seasonID) {
        return __awaiter(this, void 0, void 0, function () {
            var URL, response, startDate, endDate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        URL = BASE_URL + "/seasons/" + seasonID + "?sportId=1";
                        return [4 /*yield*/, rp(URL, { json: true })];
                    case 1:
                        response = _a.sent();
                        startDate = new Date(response.seasons[0].regularSeasonStartDate);
                        endDate = new Date(response.seasons[0].regularSeasonEndDate);
                        return [2 /*return*/, { startDate: startDate, endDate: endDate }];
                }
            });
        });
    }
    function getPlayByPlay(game) {
        return __awaiter(this, void 0, void 0, function () {
            var gamePK, URL, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gamePK = (typeof (game) === 'number') ? game : game.gamePk;
                        URL = BASE_URL + "/game/" + gamePK + "/playByPlay";
                        return [4 /*yield*/, rp(URL, { json: true })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    }
    MLBStatsAPI.getPlayByPlay = getPlayByPlay;
    function getLinescore(game) {
        return __awaiter(this, void 0, void 0, function () {
            var gamePK, URL, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gamePK = (typeof (game) === 'number') ? game : game.gamePk;
                        URL = BASE_URL + "/game/" + gamePK + "/linescore";
                        return [4 /*yield*/, rp(URL, { json: true })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    }
    MLBStatsAPI.getLinescore = getLinescore;
    /**
     * Gets the schedule for an entire season.
     * @param seasonID
     */
    function getSchedule(seasonID) {
        return __awaiter(this, void 0, void 0, function () {
            var dateRange, startDateStr, endDateStr, URL, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getSeasonDateRange(seasonID)];
                    case 1:
                        dateRange = _a.sent();
                        startDateStr = FormatDate(dateRange.startDate);
                        endDateStr = FormatDate(dateRange.endDate);
                        URL = BASE_URL + "/schedule?sportId=1&startDate=" + startDateStr + "&endDate=" + endDateStr;
                        return [4 /*yield*/, rp(URL, { json: true })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    }
    MLBStatsAPI.getSchedule = getSchedule;
    /**
     * Formats a date object in MM/DD/YYYY format, as expected by the MLB Stats API.
     * @param d
     */
    function FormatDate(d) {
        var options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        };
        return d.toLocaleDateString('en-US', options);
    }
})(MLBStatsAPI = exports.MLBStatsAPI || (exports.MLBStatsAPI = {}));
