import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetTeamDataController } from './controllers/get-team-data/get-team-data.controller';
import { GetTournamentDataController } from './controllers/get-tournament-data/get-tournament-data.controller';
import { GetMatchDataController } from './controllers/get-match-data/get-match-data.controller';
import { TournamentService } from './services/tournament/tournament.service';
import { TeamService } from './services/team/team.service';
import { MatchService } from './services/match/match.service';
import { FirebaseService } from './services/firebase/firebase.service';

@Module({
  imports: [],
  controllers: [AppController, GetTeamDataController, GetTournamentDataController, GetMatchDataController],
  providers: [AppService, TournamentService, TeamService, MatchService, FirebaseService],
})
export class AppModule {}
