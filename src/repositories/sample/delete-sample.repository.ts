import { Logger } from "../../utils/logger.util";
import type { SampleRepository } from "./sample.repository";
import { getAsyncLocalStorage } from "../../utils/local-storage.util";


export async function deleteSampleRepository(this: SampleRepository, id: number) {
  try {
    const db = getAsyncLocalStorage('pgTx') ?? this.db;

    await db.query(`-- sample:deleteSampleRepository
      UPDATE samples SET deleted_by = $2, deleted_at = $3 WHERE id = $1 AND deleted_at IS NULL
    `, [id, getAsyncLocalStorage('userId'), getAsyncLocalStorage('timeNow')?.toISOString()])
  } catch (e) {
    Logger.error(e as Error)
    throw e
  }
}