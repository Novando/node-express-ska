import express from "express";
import {RouteHttp} from "../controller/http/route.http";
import {LessonHttp} from "../controller/http/lesson/lesson.http";
import {LessonService} from "../service/lesson/lesson.service";

export function startRest(): express.Router {
  const lessonServ = new LessonService()
  const lessonCtrl = new LessonHttp(lessonServ);

  const router = new RouteHttp()
  router.setLessonRoute(lessonCtrl)

  return router.getRouter();
}