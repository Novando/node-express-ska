import { type Pool } from "pg";
import { createSampleRepository } from "./create-sample.repository";
import { getSamplesRepository } from "./get-samples.repository";
import { getSamplesByIdsRepository } from "./get-samples-by-ids.repository";
import { updateSampleRepository } from "./update-sample.repository";
import { deleteSampleRepository } from "./delete-sample.repository";


export class SampleRepository {
  constructor(protected readonly db: Pool) {}

  createSample = createSampleRepository
  getSamples = getSamplesRepository
  getSamplesByIds = getSamplesByIdsRepository
  updateSample = updateSampleRepository
  deleteSample = deleteSampleRepository
}