import * as dotenv from 'dotenv';
dotenv.config();

export default {
  DEPLOYMENT_ENV: process.env.DEPLOYMENT_ENV,
  CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  CONTNETFUL_ACCESS_TOKEN: process.env.CONTNETFUL_ACCESS_TOKEN,
};
