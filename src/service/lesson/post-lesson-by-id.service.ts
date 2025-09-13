import type {PostLessonByIdRequest} from "../../dto/request/lesson.request";
import {Logger} from "../../util/logger.util";
import type {LessonService} from "./lesson.service";


export async function postLessonById(this: LessonService, id: number, param: PostLessonByIdRequest)  {
  Logger.info(id)
  Logger.info(param.attemptId)
  throw new Error("Not implemented");
}