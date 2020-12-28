import { ID } from '../definition/id';
import { IEntity } from './entity';

export class Book implements IEntity {
  constructor(
    public title: string,
    public author: string,
    public readStatus: string, // Change it to enum?
    public coverImage: string,
    public review?: string,
    public rating?: number,
    public readDate?: Date,
    public id?: ID,
  ) {}
}
