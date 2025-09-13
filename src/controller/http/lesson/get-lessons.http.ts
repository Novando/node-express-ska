import type {Request, Response} from "express";
import type {LessonHttp} from "./lesson.http";
import {Logger} from "../../../util/logger.util";


export async function getLessons(this: LessonHttp, req: Request, res: Response) {
  try {
    Logger.info(req.originalUrl)
    await this.lessonService.getLessonPaginationByUserId(0)
    res.json("Ahha")
  } catch (err) {
    Logger.error((err as Error).name);
    res.json(err)
  }
}