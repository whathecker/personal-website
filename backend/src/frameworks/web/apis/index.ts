import * as express from 'express';
import { app } from '../../dependency-register';

const router: express.Router = express.Router();

// ADD presenter layer?

const listBooks = async () => {
  const response = await app.mainAppLogics.listBooks();
  return response;
};

router.get('/books/', async (_req: express.Request, res: express.Response) => {
  try {
    const output = await listBooks();
    return res.status(200).json(output);
  } catch (error) {
    console.error(error);
    return res.status(422).end(error.toString());
  }
});

export default router;
