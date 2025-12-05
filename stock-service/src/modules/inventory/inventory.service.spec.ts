import { Test, TestingModule } from '@nestjs/testing';
import { InventoryEntity } from './entities/inventory.entity';

describe('InventoryService', () => {
  let service: InventoryEntity;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryEntity],
    }).compile();

    service = module.get<InventoryEntity>(InventoryEntity);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
