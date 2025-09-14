import type { SampleService } from './sample.service';
import type { GetSampleDTO } from "../../models/dto/sample.dto";
import { Logger } from "../../utils/logger.util";
import { withTx } from "../../utils/pg-tx.util";
import Joi from "joi";

const schema = Joi.string().min(0).optional()

export async function getSampleBySelectedItemService(this: SampleService, name: string): Promise<GetSampleDTO[]> {
  try {
    const value = await schema.validateAsync({ name });

    return await withTx(this.db, async (): Promise<GetSampleDTO[]> => {
      const resItem = await this.itemRepository.getItemsByName(value, {page: 1, limit: 999999})
      const sampleIds = resItem.data.map(item => item.sample_id)

      const resSamples = await this.sampleRepository.getSamplesByIds(sampleIds)
      const data: GetSampleDTO[] = []

      for (const item of resSamples.data) {
        data.push({
          id: item.id,
          name: item.name,
          description: item.description,
        })
      }

      return data
    })
  } catch (e) {
    Logger.error(e as Error)
    throw e
  }
}