import type { SampleHttpController } from './sample.http.controller';
import type { Request, Response } from "express";
import { standardResponse } from "../../../utils/response.util";
import { Logger } from "../../../utils/logger.util";
import type { UpdateSampleDescriptionDTO } from "../../../models/dto/sample.dto";
import { standardErrorResponse } from "../../../utils/error.util";


export async function updateSampleDescriptionHttpController(this: SampleHttpController, req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id || '0')
    const body = req.body as UpdateSampleDescriptionDTO
    const result = await this.sampleService.updateSample(id, body.description)

    res.status(200).json(standardResponse(result))
  } catch (e) {
    Logger.error(e as Error)
    res.status(500).json(standardResponse(e as Error))
    standardErrorResponse(res, e as Error)
  }
}