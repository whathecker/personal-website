import { IInput } from './input';
import { IOutput } from './output';

export interface IInteractor {
  execute(request?: IInput): Promise<IOutput>;
}
