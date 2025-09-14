import type { SampleHttpController } from './sample.http.controller';
import type { Request, Response } from "express";
import { standardResponse } from "../../../utils/response.util";
import { Logger } from "../../../utils/logger.util";
import type { GetSampleByItemNameDTO } from "../../../models/dto/sample.dto";
import { standardErrorResponse } from "../../../utils/error.util";


export async function getSampleByItemNameHttpController(this: SampleHttpController, req: Request, res: Response): Promise<void> {
  try {
    const query = req.query as GetSampleByItemNameDTO
    const result = await this.sampleService.getSampleBySelectedItem(query.name)

    res.status(200).json(standardResponse(result))
  } catch (e) {
    Logger.error(e as Error)
    standardErrorResponse(res, e as Error)
  }
}