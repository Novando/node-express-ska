import dotenv from 'dotenv';

dotenv.config();

type EnvConfig = {
  nodeEnv: string;
  app: AppConfig;
}

type AppConfig = {
  port: number;
  name: string;
}

const appConfig: AppConfig = {
  port: Number(process.env.APP_PORT) || 3000,
  name: process.env.APP_NAME || '',
}

export const envConfig: EnvConfig = {
  app: appConfig,
  nodeEnv: process.env.NODE_ENV || 'development',
};