import express from 'express';
import type { SampleHttpController } from './sample/sample.http.controller';

export class RouteHttp {
  private readonly router: express.Router;

  constructor(
    private readonly sampleCtrl: SampleHttpController
  ) {
    this.router = express.Router();

    this.router.post('/sample', this.sampleCtrl.createSample.bind(this.sampleCtrl));
    this.router.get('/sample', this.sampleCtrl.getSample.bind(this.sampleCtrl));
    this.router.patch('/sample/:id', this.sampleCtrl.updateSampleDescription.bind(this.sampleCtrl));
    this.router.delete('/sample:id', this.sampleCtrl.deleteSample.bind(this.sampleCtrl));
    this.router.get('/sample-item', this.sampleCtrl.getSampleBySelectedItem.bind(this.sampleCtrl));
  }

  getRouter(): express.Router {
    return this.router;
  }
}