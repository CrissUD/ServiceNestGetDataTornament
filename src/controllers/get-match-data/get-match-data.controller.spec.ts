import { Test, TestingModule } from '@nestjs/testing';
import { GetMatchDataController } from './get-match-data.controller';

describe('GetMatchData Controller', () => {
  let controller: GetMatchDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetMatchDataController],
    }).compile();

    controller = module.get<GetMatchDataController>(GetMatchDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
