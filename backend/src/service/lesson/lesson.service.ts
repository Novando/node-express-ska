import {getLessonPaginationByUserId} from "./get-lessons-by-user-id.service";
import { postLessonById } from "./post-lesson-by-id.service";
import type {PostLessonByIdRequest} from "../../dto/request/lesson.request";


export class LessonService {
  getLessonPaginationByUserId: (userId: number) => Promise<string>
  postLessonById: (id: number, param: PostLessonByIdRequest) => Promise<string>

  constructor() {
    this.getLessonPaginationByUserId = getLessonPaginationByUserId.bind(this);
    this.postLessonById = postLessonById.bind(this);
  }

}