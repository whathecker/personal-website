import TestEnv from '../../../test-env';
import { ListBooksRepositoryContentful } from '../listbooks-repository-contentful.impl';
import { IFetchBooksResult } from '../../../app/use-cases/listbooks/interfaces';
import { Book, ReadStatus } from '../../../app/domain/entity/book';
import { exampleResponse } from './contentful-example-response';

const listBooksOutput: IFetchBooksResult = {
  status: 'FETCH_BOOK_SUCCESS',
  books: [
    {
      title: 'Agile Product Management',
      author: 'Yunjae Oh',
      readStatus: ReadStatus.finished,
      coverImage:
        '//images.ctfassets.net/9iq7dqw56i6q/36gMyk68F3OfW1K9iBDvZV/defc330e0ae1fd27933e82117c13b3bd/domain_driven_design.jpg',
      review: 'My review',
      rating: 3,
      readDate: new Date('2020-09-08T00:00+01:00'),
      id: '1FgJa7Fajh2NvPtLoGo76o',
    },
    {
      title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
      author: 'Eric Evans',
      readStatus: ReadStatus.reading,
      coverImage:
        '//images.ctfassets.net/9iq7dqw56i6q/36gMyk68F3OfW1K9iBDvZV/defc330e0ae1fd27933e82117c13b3bd/domain_driven_design.jpg',
      rating: 4,
      id: '5EVqTCmwBpJTWfn9mVWqPZ',
    },
  ] as Book[],
};

describe('Test listBooksRepository - ContentFul implementation', () => {
  let listBooksRepository: ListBooksRepositoryContentful;
  let contentful;

  beforeEach(() => {
    contentful = {
      createClient: jest.fn(() => mockContentFulClient),
    };

    const mockContentFulClient = {
      getEntries: jest.fn(() => exampleResponse),
    };

    listBooksRepository = TestEnv.createTestInstance(ListBooksRepositoryContentful, [
      {
        name: 'contentful',
        useValue: contentful,
      },
    ]) as ListBooksRepositoryContentful;
  });

  test('List books should return correct data', async () => {
    const result = await listBooksRepository.fetchBooks();
    expect(result).toMatchObject(listBooksOutput);
  });
});

/*
import * as contentful from 'contentful';

describe('Test listBooksRepository - ContentFul implementation, test with actual API', () => {
  const repository = new ListBooksRepositoryContentful(contentful);
  
  test('List books should return correct data', async () => {
    const result = await repository.fetchBooks();
    expect(result.status).toBe('FETCH_BOOK_SUCCESS');
  });
});
*/
