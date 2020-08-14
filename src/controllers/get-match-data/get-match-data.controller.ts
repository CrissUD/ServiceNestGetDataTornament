import { Controller, Get, Param } from '@nestjs/common';
import { MatchService } from 'src/services/match/match.service';

@Controller('api/match')
export class GetMatchDataController {

    constructor (private matchService: MatchService) {}

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get("/:idTournament")
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getMatches(@Param('idTournament') idTournament) {
        return this.matchService.getMatches(idTournament);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get("/:idTournament/:idMatch")
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getMatch(@Param('idTournament') idTournament, @Param('idMatch') idMatch) {
        return this.matchService.getMatch(idTournament, idMatch);
    }
}
