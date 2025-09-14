import { Logger } from "../../utils/logger.util";
import type { SampleRepository } from "./sample.repository";
import { getAsyncLocalStorage } from "../../utils/local-storage.util";
import type { SampleEntity } from "../../models/entity/sample.entity";
import type { Pagination } from "../../models/dto/common.dto";


export async function getSamplesRepository(this: SampleRepository, paging: Pagination): Promise<{data: SampleEntity[], total: number}> {
  try {
    const db = getAsyncLocalStorage('pgTx') ?? this.db;

    paging.page = paging.page < 1 ? 1 : paging.page
    const res = await db.query<SampleEntity>(`-- sample:getSampleRepositorySelect
      SELECT id, name, description FROM samples WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT $1 OFFSET $2
    `, [paging.limit, paging.page - 1])
    const count = await db.query<{count: number}>(`-- sample:getSampleRepositoryCount
      SELECT COUNT(id) AS count FROM samples WHERE deleted_at IS NULL
    `)

    return {data: res.rows, total: count.rows[0]?.count || 0}
  } catch (e) {
    Logger.error(e as Error)
    throw e
  }
}