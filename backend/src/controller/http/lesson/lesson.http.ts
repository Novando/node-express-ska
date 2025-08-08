import type {LessonService} from "../../../service/lesson/lesson.service";
import type {Request, Response} from "express";
import {getLessons} from "./get-lessons.http";
import {postLessonById} from "./post-lesson-by-id.http";

export class LessonHttp {
  getLessons: (req: Request, res: Response) => Promise<void>
  postLessonById: (req: Request, res: Response) => Promise<void>

  constructor(protected lessonService: LessonService) {
    this.getLessons = getLessons.bind(this);
    this.postLessonById = postLessonById.bind(this);
  }
}