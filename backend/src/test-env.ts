/* eslint-disable @typescript-eslint/no-explicit-any */

import { asClass, asValue, AwilixContainer, createContainer, InjectionMode } from 'awilix';

interface MockConstructor<T> {
  new (...args: any[]): T;
}

interface Dependency {
  name: string;
  useClass?: MockConstructor<unknown>;
  useValue?: any;
}

let container: AwilixContainer;

export default class TestEnv {
  static createTestInstance<T>(constructorToTest: MockConstructor<T>, dependencies?: Dependency[]): T {
    container = createContainer({ injectionMode: InjectionMode.CLASSIC });

    container.register(constructorToTest.name, asClass(constructorToTest));

    if (dependencies) {
      dependencies.forEach((dependency) => {
        if (dependency.useClass) {
          container.register(dependency.name, asClass(dependency.useClass).singleton());
        }
        if (dependency.useValue) {
          container.register(dependency.name, asValue(dependency.useValue));
        }
      });
    }
    return container.resolve<T>(constructorToTest.name);
  }
}
