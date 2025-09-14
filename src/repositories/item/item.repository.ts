import type { Pool } from "pg";
import { getItemsByNameRepository } from "./get-items-by-name.repository";


export class ItemRepository {
  constructor(protected readonly db: Pool) {}

  getItemsByName = getItemsByNameRepository
}