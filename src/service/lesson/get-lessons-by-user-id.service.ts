import {LessonService} from "./lesson.service";
import Joi from "joi";

const validation = Joi.number().min(1).required();

export async function getLessonPaginationByUserId(this: LessonService, userId: number) {
  await validation.validateAsync(userId)

  return {success: true}
}