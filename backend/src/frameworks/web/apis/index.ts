import * as express from 'express';
import { app } from '../../dependency-register';
import {
  IListBooksPresenter,
  IListBooksPresenterOutput,
  IListBooksQuery,
} from './presenter/listbooks/listbooks-presenter';

const router: express.Router = express.Router();

const listBooks = async (query?: IListBooksQuery): Promise<IListBooksPresenterOutput> => {
  const presenter: IListBooksPresenter = app.dependencyContainer.resolve<IListBooksPresenter>('listBooksPresenter');

  const response = await app.mainAppLogics.listBooks();

  let output;

  if (query) {
    output = await presenter.present(response, query);
  } else {
    output = await presenter.present(response);
  }
  return output;
};

router.get('/books/', async (req: express.Request, res: express.Response) => {
  try {
    let output;

    if (req.query.status) {
      const query: IListBooksQuery = {
        status: req.query.status as string,
      };
      output = await listBooks(query);
    } else {
      output = await listBooks();
    }

    return res.status(200).json(output);
  } catch (error) {
    console.error(error);
    return res.status(422).end(error.toString());
  }
});

export default router;
