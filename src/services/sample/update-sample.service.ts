import type { SampleService } from './sample.service';
import { Logger } from "../../utils/logger.util";
import Joi from "joi";

const schema = Joi.object({
  id: Joi.number().required().min(1),
  desc: Joi.string().required().min(1),
})

export async function updateSampleService(this: SampleService, id: number, desc: string): Promise<{ message: string }> {
  try {
    await schema.validateAsync({id, desc})
    await this.sampleRepository.updateSample(id, desc)

    return {message: 'Sample updated successfully'}
  } catch (e) {
    Logger.error(e as Error);
    throw e;
  }
}