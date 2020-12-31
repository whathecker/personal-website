import { IListBooksOutput } from '../../../../../../app/use-cases/listbooks/interfaces';
import { Book, ReadStatus } from '../../../../../../app/domain/entity/book';
import { IListBooksQuery, IListBooksPresenterOutput } from '../listbooks-presenter';
import { ListBooksPresenter } from '../listbooks-presenter.impl';

const listBooksOutput: IListBooksOutput = {
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
    {
      title: 'Lean Customer Development',
      author: 'Cindy Alvarez',
      readStatus: ReadStatus.reading,
      coverImage:
        '//images.ctfassets.net/9iq7dqw56i6q/36gMyk68F3OfW1K9iBDvZV/defc330e0ae1fd27933e82117c13b3bd/domain_driven_design.jpg',
      rating: 4,
      id: '5EVqTCmwBpJTWfn9mVWq4t23',
    },
  ] as Book[],
};

describe('Test listBooksPresenter', () => {
  const listBooksPresenter = new ListBooksPresenter();

  test('listBooksPresenter should return data without applying filter', async () => {
    const result = (await listBooksPresenter.present(listBooksOutput)) as IListBooksPresenterOutput;

    expect(result).toMatchObject(listBooksOutput);
  });

  test('listBooksPresenter should return data by applying filter - currently reading status', async () => {
    const query: IListBooksQuery = { status: ReadStatus.reading };

    const result = (await listBooksPresenter.present(listBooksOutput, query)) as IListBooksPresenterOutput;
    expect(result.books).toHaveLength(2);
  });

  test('listBooksPresenter should return data without applying filter - finished reading status', async () => {
    const query: IListBooksQuery = { status: ReadStatus.finished };

    const result = (await listBooksPresenter.present(listBooksOutput, query)) as IListBooksPresenterOutput;
    expect(result.books).toHaveLength(1);
  });
});
