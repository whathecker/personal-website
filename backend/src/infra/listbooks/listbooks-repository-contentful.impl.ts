/* eslint-disable @typescript-eslint/no-explicit-any */
import { IListBooksRepository, IFetchBooksResult } from '../../app/use-cases/listbooks/interfaces';
import { Book } from '../../app/domain/entity/book';
import config from '../../config';
import contentful from 'contentful';

type Contentful = typeof contentful;

export class ListBooksRepositoryContentful implements IListBooksRepository {
  private contentful: Contentful;

  constructor(contentful: Contentful) {
    this.contentful = contentful;
  }

  async fetchBooks(): Promise<IFetchBooksResult> {
    try {
      const client = this.contentful.createClient({
        space: config.CONTENTFUL_SPACE_ID || '',
        accessToken: config.CONTNETFUL_ACCESS_TOKEN || '',
      });

      const response = client.getEntries({ content_type: 'book' });

      const result: IFetchBooksResult = {
        status: 'FETCH_BOOK_SUCCESS',
        books: this.serializeBooksFromResponse(response),
      };

      return Promise.resolve(result);
    } catch (error) {
      console.error(error);
      const result: IFetchBooksResult = {
        status: 'FETCH_BOOK_FAILED',
        errorData: error,
      };
      return Promise.reject(result);
    }
  }

  private serializeBooksFromResponse(contentfulRes: Record<string, any>) {
    const items: [] = contentfulRes['items'];
    const assets: [] = contentfulRes['includes']['Asset'];

    if (items.length === 0) return [];

    return items.map((item) => this.serializeBook(item, assets));
  }

  private serializeBook(item: Record<string, any>, assets: Record<string, any>[]): Book {
    const fieldsObj = item['fields'];
    const sysObj = item['sys'];

    const coverImgId = fieldsObj.coverImage.sys.id;

    const book: Book = {
      title: fieldsObj.title,
      author: fieldsObj.author,
      readStatus: fieldsObj.status,
      coverImage: this.findImageUrl(coverImgId, assets),
      id: sysObj.id,
    };

    fieldsObj.rating ? (book.rating = fieldsObj.rating) : null;
    fieldsObj.myReview ? (book.review = this.retrieveReviewText(fieldsObj.myReview.content)) : null;
    fieldsObj.readDate ? (book.readDate = new Date(fieldsObj.readDate)) : null;

    return book;
  }

  private findImageUrl(coverImgId: string, assets: Record<string, any>[]): string {
    const foundAsset = assets.find((asset) => coverImgId === asset['sys']['id']);

    if (!foundAsset) return 'image not found'; //TODO: consider use default img path?

    const fieldObj = foundAsset['fields'];
    return fieldObj.file.url;
  }

  private retrieveReviewText(content: Record<string, any>[]): string {
    /**
     * Technical Dept: this is naive implementation that only concat the texts
     * other rich text elements like bolded texts are ignored
     *
     * Remember to remove this comment when this debt is resolved
     *  */
    return content.reduce((accumulator: string, currentVal: Record<string, any>) => {
      const contentVal = currentVal['content'][0].value;
      return accumulator.concat(contentVal);
    }, '') as string;
  }
}
