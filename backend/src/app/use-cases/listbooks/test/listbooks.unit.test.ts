import TestEnv from '../../../../test-env';
import { ListBookInteractor } from '../listbooks-interactor';
import { IListBooksOutput, IFetchBooksResult } from '../interfaces';
import { ReadStatus } from '../../../domain/entity/book';

const fetchBooksResult: IFetchBooksResult = {
  status: 'FETCH_BOOK_FAILED',
  books: [
    {
      title: 'Agile Product Management',
      author: 'Eric Evans',
      readStatus: ReadStatus.reading,
      coverImage: '/img/urlpath',
    },
  ],
};

function isListBooksOutput(output: IListBooksOutput): output is IListBooksOutput {
  return (output as IListBooksOutput) !== undefined;
}

describe('Test list books use case', () => {
  let listBooksInteractor: ListBookInteractor;
  let listBooksRepository;
  let errorFactory;

  beforeEach(() => {
    listBooksRepository = {
      fetchBooks: jest.fn(async () => Promise.resolve(fetchBooksResult)),
    };

    errorFactory = {
      getError: jest.fn(() => new Error('mock error')),
    };

    listBooksInteractor = TestEnv.createTestInstance(ListBookInteractor, [
      {
        name: 'listBooksRepository',
        useValue: listBooksRepository,
      },
      {
        name: 'errorFactory',
        useValue: errorFactory,
      },
    ]) as ListBookInteractor;
  });

  describe('Execute list books', () => {
    test('List books should works', async () => {
      const response = await listBooksInteractor.execute();

      const isReponseCorrect = isListBooksOutput(response);

      expect(isReponseCorrect).toBeTruthy();
    });
  });
});
