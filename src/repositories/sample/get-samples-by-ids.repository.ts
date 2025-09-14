import { Logger } from "../../utils/logger.util";
import type { SampleRepository } from "./sample.repository";
import { getAsyncLocalStorage } from "../../utils/local-storage.util";
import type { SampleEntity } from "../../models/entity/sample.entity";


export async function getSamplesByIdsRepository(this: SampleRepository, ids: number[]): Promise<{data: SampleEntity[], total: number}> {
  try {
    const db = getAsyncLocalStorage('pgTx') ?? this.db;

    const res = await db.query<SampleEntity>(`-- sample:getSamplesByIdsRepository
      SELECT id, name, description FROM samples WHERE id IN ($1) AND deleted_at IS NULL ORDER BY created_at DESC
    `, [ids])

    return {data: res.rows, total: res.rowCount || 0}
  } catch (e) {
    Logger.error(e as Error)
    throw e
  }
}