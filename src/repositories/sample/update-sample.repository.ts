import { Logger } from "../../utils/logger.util";
import type { SampleRepository } from "./sample.repository";
import { getAsyncLocalStorage } from "../../utils/local-storage.util";


export async function updateSampleRepository(this: SampleRepository, id: number, desc: string) {
  try {
    const db = getAsyncLocalStorage('pgTx') ?? this.db;

    await db.query(`-- sample:updateSampleRepository
      UPDATE samples SET description = $2, updated_by = $3, updated_at = $4 WHERE id = $1 AND deleted_at IS NULL
    `, [id, desc, getAsyncLocalStorage('userId'), getAsyncLocalStorage('timeNow')?.toISOString()])
  } catch (e) {
    Logger.error(e as Error)
    throw e
  }
}