import { Test, TestingModule } from '@nestjs/testing';
import { EmplyeeController } from './emplyee.controller';

describe('EmplyeeController', () => {
  let controller: EmplyeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmplyeeController],
    }).compile();

    controller = module.get<EmplyeeController>(EmplyeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
