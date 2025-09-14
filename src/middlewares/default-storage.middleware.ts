import type { Request, Response, NextFunction } from "express";
import { runWithStore } from "../utils/local-storage.util";
import dayjs from "dayjs";


export function defaultStorageMiddleware(req: Request, res: Response, next: NextFunction) {
  runWithStore({
    timeNow: dayjs(),
    endpoint: `[${req.method}] ${req.url}`,
  }, () => { next() });
}