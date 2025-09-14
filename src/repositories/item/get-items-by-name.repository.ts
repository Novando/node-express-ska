import { Logger } from "../../utils/logger.util";
import { getAsyncLocalStorage } from "../../utils/local-storage.util";
import type { Pagination } from "../../models/dto/common.dto";
import type { ItemEntity } from "../../models/entity/item.entity";
import type { ItemRepository } from "./item.repository";


export async function getItemsByNameRepository(this: ItemRepository, name: string, paging: Pagination): Promise<{data: ItemEntity[], total: number}> {
  try {
    const db = getAsyncLocalStorage('pgTx') ?? this.db;

    paging.page = paging.page < 1 ? 1 : paging.page
    const res = await db.query<ItemEntity>(`-- sample:getItemsByNameRepositorySelect
      SELECT id, name, quantity, sample_id FROM items WHERE name ILIKE $1 AND deleted_at IS NULL LIMIT $2 OFFSET $3 ORDER BY created_at DESC
    `, [`%${name}%`, paging.limit, paging.page - 1])
    const count = await db.query<{count: number}>(`-- sample:getItemsByNameRepositoryCount
      SELECT COUNT(id) AS count FROM items WHERE name ILIKE $1 AND deleted_at IS NULL
    `, [`%${name}%`])

    return {data: res.rows, total: count.rows[0]?.count || 0}
  } catch (e) {
    Logger.error(e as Error)
    throw e
  }
}