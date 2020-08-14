import { Controller, Param, Get } from '@nestjs/common';
import { TournamentService } from 'src/services/tournament/tournament.service';

@Controller('api/tournament')
export class GetTournamentDataController {
    constructor (private tournamentService : TournamentService) {}

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get("/:idTournament")
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getTeams(@Param('idTournament') idTournament) {
        return this.tournamentService.getTournament(idTournament);
    }
}
