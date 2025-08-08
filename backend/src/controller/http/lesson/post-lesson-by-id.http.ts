import type {Request, Response} from "express";
import {Logger} from "../../../util/logger.util";
import type {LessonHttp} from "./lesson.http";


export async function postLessonById(this: LessonHttp, req: Request, res: Response) {
  Logger.info(req.baseUrl)
  Logger.info(res.statusMessage)
  throw new Error("Not implemented");
}