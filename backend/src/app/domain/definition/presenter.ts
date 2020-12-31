import { IOutput } from './output';

export interface IPresenterOutput {}

export interface IPresenter<T extends IOutput> {
  present(data: T): Promise<IPresenterOutput>;
}
