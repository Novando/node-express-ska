import { Logger } from "../../utils/logger.util";
import type { SampleRepository } from "./sample.repository";
import { getAsyncLocalStorage } from "../../utils/local-storage.util";
import type { CreateSampleDTO } from "../../models/dto/sample.dto";


export async function createSampleRepository(this: SampleRepository, param: CreateSampleDTO) {
  try {
    const db = getAsyncLocalStorage('pgTx') ?? this.db;

    await db.query(`-- sample:createSampleRepository
      INSERT INTO samples (name, description, created_by, created_at, updated_by, updated_at)
      VALUES ($1, $2, $3, $4, $3, $4)
    `, [param.name, param.description, getAsyncLocalStorage('userId'), getAsyncLocalStorage('timeNow')?.toISOString()])
  } catch (e) {
    Logger.error(e as Error)
    throw e
  }
}