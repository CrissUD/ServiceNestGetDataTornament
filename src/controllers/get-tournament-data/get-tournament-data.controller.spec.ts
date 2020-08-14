import { Test, TestingModule } from '@nestjs/testing';
import { GetTournamentDataController } from './get-tournament-data.controller';

describe('GetTournamentData Controller', () => {
  let controller: GetTournamentDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetTournamentDataController],
    }).compile();

    controller = module.get<GetTournamentDataController>(GetTournamentDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
