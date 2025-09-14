import express from "express";
import {RouteHttp} from "../controllers/https/route.http";
import { SampleHttpController } from "../controllers/https/sample/sample.http.controller";
import { SampleService } from "../services/sample/sample.service";
import { initPg } from "../libs/pg.lib";
import { SampleRepository } from "../repositories/sample/sample.repository";
import { ItemRepository } from "../repositories/item/item.repository";

export async function startRest(): Promise<express.Router> {
  const pg = await initPg()

  // Repository
  const sampleRepo = new SampleRepository(pg)
  const itemRepo = new ItemRepository(pg)

  // Service
  const sampleSvc = new SampleService(pg, sampleRepo, itemRepo)

  // Controller
  const sampleCtrl = new SampleHttpController(sampleSvc)

  const router = new RouteHttp(sampleCtrl)

  return router.getRouter();
}