import { createSampleService } from './create-sample.service';
import { deleteSampleService } from './delete-sample.service';
import { getSampleBySelectedItemService } from './get-sample-by-selected-item.service';
import { getSampleService } from './get-sample.service';
import { updateSampleService } from './update-sample.service';
import type { SampleRepository } from "../../repositories/sample/sample.repository";
import type { ItemRepository } from "../../repositories/item/item.repository";
import type { Pool } from "pg";
import { Logger } from "../../utils/logger.util";


export class SampleService {
  constructor(
    protected readonly db: Pool,

    protected readonly sampleRepository: SampleRepository,
    protected readonly itemRepository: ItemRepository,
  ) {}

  createSample = createSampleService
  getSample = getSampleService
  updateSample = updateSampleService
  deleteSample = deleteSampleService
  getSampleBySelectedItem = getSampleBySelectedItemService
}