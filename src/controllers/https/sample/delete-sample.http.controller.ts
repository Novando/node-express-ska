import type { SampleHttpController } from './sample.http.controller';
import { standardResponse } from "../../../utils/response.util";
import { Logger } from "../../../utils/logger.util";
import type { Request, Response } from "express";
import { standardErrorResponse } from "../../../utils/error.util";


export async function deleteSampleHttpController(this: SampleHttpController, req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id || '0')
    const result = await this.sampleService.deleteSample(id)

    res.status(200).json(standardResponse(result))
  } catch (e) {
    Logger.error(e as Error)
    standardErrorResponse(res, e as Error)
  }
}