import { createSampleHttpController } from './create-sample.http.controller';
import { getSampleByItemNameHttpController } from './get-sample-by-item-name.http.controller';
import { deleteSampleHttpController } from './delete-sample.http.controller';
import { updateSampleDescriptionHttpController } from './update-sample-description.http.controller';
import { getSampleHttpController } from './get-sample.http.controller';
import type { SampleService } from "../../../services/sample/sample.service";

export class SampleHttpController {
  constructor(
    protected readonly sampleService: SampleService
  ) {}

  createSample = createSampleHttpController
  getSample = getSampleHttpController;
  updateSampleDescription = updateSampleDescriptionHttpController
  deleteSample = deleteSampleHttpController
  getSampleBySelectedItem = getSampleByItemNameHttpController
}

