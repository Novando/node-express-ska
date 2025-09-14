import type { SampleService } from './sample.service';
import Joi from "joi";
import { Logger } from "../../utils/logger.util";

const schema = Joi.number().required().min(1);

export async function deleteSampleService(this: SampleService, id: number): Promise<{message: string}> {
  try {
    const value = await schema.validateAsync(id);

    await this.sampleRepository.deleteSample(value);

    return {message: 'Sample deleted successfully'}
  } catch (e) {
    Logger.error(e as Error);
    throw e
  }
}