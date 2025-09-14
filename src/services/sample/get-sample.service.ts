import type { SampleService } from './sample.service';
import { Logger } from "../../utils/logger.util";
import type { WithMeta } from "../../utils/response.util";
import type { GetSampleDTO } from "../../models/dto/sample.dto";
import type { Pagination } from "../../models/dto/common.dto";
import Joi from "joi";

const schema = Joi.object<Pagination>({
  page: Joi.number().min(1).required(),
  limit: Joi.number().min(5).required(),
})

export async function getSampleService(this: SampleService, param: Pagination): Promise<WithMeta<GetSampleDTO[]>> {
  try {
    const value = await schema.validateAsync(param)
    const data: GetSampleDTO[] = []
    const res = await this.sampleRepository.getSamples(value)

    for (const item of res.data) {
      data.push({
        id: item.id,
        name: item.name,
        description: item.description,
      })
    }

    return { data, meta: { total: res.total, page: value.page } }
  } catch (e) {
    Logger.error(e as Error)
    throw e
  }
}