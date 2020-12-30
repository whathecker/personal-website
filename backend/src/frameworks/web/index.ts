import '../dependency-register';
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

import { bodyParserErrHandler } from './middlewares';

import apiRoutes from './apis';

const server: express.Application = express();
const port = process.env.PORT || 9000;

const corsOptions: cors.CorsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  credentials: true,
};

server.use(cors(corsOptions));
server.use(helmet());
server.use(morgan('dev')); // TODO: check other options!

server.get('/health', async (_req: Request, res: Response) => {
  return res.status(200).type('text/plain').send('200 OK');
});

server.use('/books/*', bodyParser.json(), bodyParserErrHandler);

const swaggerData = YAML.load(process.cwd() + '/src/frameworks/web/swagger/swagger-definition.yaml');
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerData));

server.use(apiRoutes);

export default server;

server
  .listen(port, () => {
    console.log(`Server is running on port number: ${port}`);
  })
  .on('error', (err) => {
    console.error(err);
    throw err;
  });
