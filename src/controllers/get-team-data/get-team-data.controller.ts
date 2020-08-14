import { Controller, Get, Param } from '@nestjs/common';
import { TeamService } from 'src/services/team/team.service';

@Controller('api/team')
export class GetTeamDataController {

    constructor (private teamService: TeamService) {}

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get("/:idTournament")
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getTeams(@Param('idTournament') idTournament) {
        return this.teamService.getTeams(idTournament);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get("/:idTournament/:idTeam")
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getTeam(@Param('idTournament') idTournament, @Param('idTeam') idTeam) {
        console.log("funciona")
        return this.teamService.getTeam(idTournament, idTeam);
    }
}
