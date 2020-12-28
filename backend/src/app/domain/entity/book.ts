import { ID } from '../definition/id';
import { IEntity } from './entity';

export enum ReadStatus {
  reading = 'READING',
  finished = 'FINISHED'
}

export class Book implements IEntity {
  constructor(
    public title: string,
    public author: string,
    public readStatus: ReadStatus,
    public coverImage: string,
    public review?: string,
    public rating?: number,
    public readDate?: Date,
    public id?: ID,
  ) {}
}
