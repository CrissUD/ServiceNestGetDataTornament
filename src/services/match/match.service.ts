import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class MatchService {

    constructor(private firebaseService: FirebaseService) { }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getMatches (idTournament) {
        return await this.firebaseService.getElement(`/json/${idTournament}/matches`);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getMatch (idTournament, idMatch) {
        return await this.firebaseService.getElement(`/json/${idTournament}/matches/${idMatch}`);
    }
}
