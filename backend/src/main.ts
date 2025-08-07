import express from 'express'
import cors from 'cors'
import {Logger} from "./util/logger.util";
import {envConfig} from "./config/config.config";

async function main () {
  Logger.init('./log/logfile')

  const app = express()
  app.use(express.json())
  app.use(cors())

  const server = app.listen(envConfig.app.port, () => {})
  Logger.info(
    envConfig.app.name,
    ' Started at port ',
    envConfig.app.port,
  )

  process.on('SIGTERM', () => {
    Logger.info('SIGTERM signal received: closing HTTP server')
    server.close(() => {
      Logger.info('HTTP server closed')
    })
  })
}

main()