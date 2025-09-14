import type { SampleService } from './sample.service';
import { Logger } from "../../utils/logger.util";
import Joi from "joi";
import type { CreateSampleDTO } from "../../models/dto/sample.dto";

const schema = Joi.object<CreateSampleDTO>({
  name: Joi.string().min(1).required(),
  description: Joi.string().min(1).optional(),
})

export async function createSampleService(this: SampleService, param: CreateSampleDTO): Promise<{message: string}> {
  try {
    const value = await schema.validateAsync(param)

    await this.sampleRepository.createSample(value)

    return {message: 'Sample created successfully'}
  } catch (e) {
    Logger.error(e as Error)
    throw e
  }
}