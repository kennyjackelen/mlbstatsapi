export interface IBoxscoreResponse {
    copyright: string;
    teams: BoxscoreTeams;
    officials: Official[];
    info: GameInfo[];
    pitchingNotes: string[];
  }
  
  /* tslint:disable interface-name */

    export interface BoxscoreTeams {
        away: BoxscoreTeam;
        home: BoxscoreTeam;
    }

    export interface BoxscoreTeam {
        team: Team;
        teamStats: TeamStats;
        players: Players;
        batters: number[];
        pitchers: number[];
        bench: number[];
        bullpen: number[];
        battingOrder: number[];
        info: Info[];
        note: Note[];
    }

    export interface Players {
        [key: string]: Player;
    }

    export interface Player {
        person: Person;
        jerseyNumber: string;
        position: Position;
        stats: Stats;
        status: Status;
        parentTeamId: number;
        seasonStats: SeasonStats;
        gameStatus: GameStatus;
    }

    export interface Team {
        id: number;
        name: string;
        link: string;
        season: number;
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
        record: Record;
        springLeague: SpringLeague;
        allStarStatus: string;
        active: boolean;
    }

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

    export interface LeagueRecord {
        wins: number;
        losses: number;
        pct: string;
    }

    export interface Records {
    }

    export interface Record {
        gamesPlayed: number;
        wildCardGamesBack: string;
        leagueGamesBack: string;
        springLeagueGamesBack: string;
        sportGamesBack: string;
        divisionGamesBack: string;
        conferenceGamesBack: string;
        leagueRecord: LeagueRecord;
        records: Records;
        divisionLeader: boolean;
        wins: number;
        losses: number;
        winningPercentage: string;
    }

    export interface SpringLeague {
        id: number;
        name: string;
        link: string;
        abbreviation: string;
    }

    export interface Batting {
        gamesPlayed: number;
        flyOuts: number;
        groundOuts: number;
        runs: number;
        doubles: number;
        triples: number;
        homeRuns: number;
        strikeOuts: number;
        baseOnBalls: number;
        intentionalWalks: number;
        hits: number;
        hitByPitch: number;
        avg: string;
        atBats: number;
        obp: string;
        slg: string;
        ops: string;
        caughtStealing: number;
        stolenBases: number;
        stolenBasePercentage: string;
        groundIntoDoublePlay: number;
        groundIntoTriplePlay: number;
        plateAppearances: number;
        totalBases: number;
        rbi: number;
        leftOnBase: number;
        sacBunts: number;
        sacFlies: number;
        babip: string;
        catchersInterference: number;
        pickoffs: number;
        atBatsPerHomeRun: string;
    }

    export interface Pitching {
        gamesPlayed: number;
        gamesStarted: number;
        groundOuts: number;
        airOuts: number;
        runs: number;
        doubles: number;
        triples: number;
        homeRuns: number;
        strikeOuts: number;
        baseOnBalls: number;
        intentionalWalks: number;
        hits: number;
        hitByPitch: number;
        atBats: number;
        obp: string;
        caughtStealing: number;
        stolenBases: number;
        stolenBasePercentage: string;
        era: string;
        inningsPitched: string;
        wins: number;
        losses: number;
        saves: number;
        saveOpportunities: number;
        holds: number;
        blownSaves: number;
        earnedRuns: number;
        whip: string;
        outs: number;
        gamesPitched: number;
        completeGames: number;
        shutouts: number;
        hitBatsmen: number;
        balks: number;
        wildPitches: number;
        pickoffs: number;
        groundOutsToAirouts: string;
        rbi: number;
        winPercentage: string;
        gamesFinished: number;
        strikeoutWalkRatio: string;
        strikeoutsPer9Inn: string;
        walksPer9Inn: string;
        hitsPer9Inn: string;
        runsScoredPer9: string;
        homeRunsPer9: string;
        inheritedRunners: number;
        inheritedRunnersScored: number;
        catchersInterference: number;
        sacBunts: number;
        sacFlies: number;
    }

    export interface Fielding {
        assists: number;
        putOuts: number;
        errors: number;
        chances: number;
        fielding: string;
        caughtStealing: number;
        passedBall: number;
        stolenBases: number;
        stolenBasePercentage: string;
        pickoffs: number;
    }

    export interface TeamStats {
        batting: Batting;
        pitching: Pitching;
        fielding: Fielding;
    }

    export interface Person {
        id: number;
        fullName: string;
        link: string;
    }

    export interface Position {
        code: string;
        name: string;
        type: string;
        abbreviation: string;
    }

    export interface Stats {
        batting: Batting;
        pitching: Pitching;
        fielding: Fielding;
    }

    export interface Status {
        code: string;
        description: string;
    }

    export interface SeasonStats {
        batting: Batting;
        pitching: Pitching;
        fielding: Fielding;
    }

    export interface GameStatus {
        isCurrentBatter: boolean;
        isCurrentPitcher: boolean;
        isOnBench: boolean;
        isSubstitute: boolean;
    }

    export interface AllPosition {
        code: string;
        name: string;
        type: string;
        abbreviation: string;
    }

    export interface FieldList {
        label: string;
        value: string;
    }

    export interface Info {
        title: string;
        fieldList: FieldList[];
    }

    export interface Note {
        label: string;
        value: string;
    }

    export interface Official {
        official: Person;
        officialType: string;
    }

    export interface GameInfo {
        label: string;
        value: string;
    }

