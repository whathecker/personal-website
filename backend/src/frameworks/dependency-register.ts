import { asClass, asValue, createContainer, InjectionMode } from 'awilix';
import contentful from 'contentful';

import { App } from '../app';

import { AppErrorFactory } from '../infra/errors/app-error-factory.impl';
import { ListBookInteractor } from '../app/use-cases/listbooks/listbooks-interactor';
import { ListBooksRepositoryContentful } from '../infra/listbooks/listbooks-repository-contentful.impl';

const dependencyContainer = createContainer({ injectionMode: InjectionMode.CLASSIC });

dependencyContainer.register({
  // node modules
  contentful: asValue(contentful),

  // application logic class
  app: asClass(App),

  errorFactory: asClass(AppErrorFactory),

  // interactors
  listBookInteractor: asClass(ListBookInteractor),

  // repositories
  listBooksRepository: asClass(ListBooksRepositoryContentful),
});

const mainAppLogics = dependencyContainer.resolve<App>('app');

export const app = {
  mainAppLogics,
  dependencyContainer,
};
