import { Test, TestingModule } from '@nestjs/testing';
import { GetTeamDataController } from './get-team-data.controller';

describe('GetTeamData Controller', () => {
  let controller: GetTeamDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetTeamDataController],
    }).compile();

    controller = module.get<GetTeamDataController>(GetTeamDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
