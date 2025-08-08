import type {LessonHttp} from "./lesson/lesson.http";
import express from 'express';

export class RouteHttp {
  private readonly router: express.Router;

  constructor() {
    this.router = express.Router();
  }

  setLessonRoute(lessonCtrl: LessonHttp) {
    this.router.get('/lesson', lessonCtrl.getLessons);
    this.router.post('/lesson/:id/submit', lessonCtrl.postLessonById);
  }
  getRouter(): express.Router {
    return this.router;
  }
}