import type { SampleHttpController } from './sample.http.controller';
import type { Request, Response } from "express";
import { standardResponse } from "../../../utils/response.util";
import type { CreateSampleDTO } from "../../../models/dto/sample.dto";
import { Logger } from "../../../utils/logger.util";
import { standardErrorResponse } from "../../../utils/error.util";


export async function createSampleHttpController(this: SampleHttpController, req: Request, res: Response): Promise<void> {
  try {
    const result = await this.sampleService.createSample(req.body as CreateSampleDTO)

    res.status(200).json(standardResponse(result))
  } catch (e) {
    Logger.error(e as Error)
    standardErrorResponse(res, e as Error)
  }
}