# Project Overview
This project is an application that provides an abstraction for [my website](https://www.yunjaeoh.com) to fetch data to power the reading-list.

## Stack overview
- Written in [TypeScript](https://github.com/microsoft/TypeScript)
- Project is structured based on [Clean Architecture by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- Uses [jest](https://jestjs.io/en/) and [supertest](https://www.npmjs.com/package/supertest) for tests
- [Husky](https://www.npmjs.com/package/husky) is used to ensure [eslint](https://github.com/eslint/eslint) and [commitlint](https://www.npmjs.com/package/@commitlint/cli) is run before each commit
- Uses [conventional commit](https://www.npmjs.com/package/@commitlint/config-conventional) for commit lint rule

## Run Project Locally
1. `git clone {this repo}`
2. `npm install or yarn`
3. `npm run dev`
4. `visit localhost:9000/api-docs`

## Environment Variables

| Key                        | Value                                  | Note                                  |
| -------------------------- |:---------------------------------------| :-------------------------------------|
| DEPLOYMENT_ENV             | String indicates  enviornment          | Required                              |
| CONTENTFUL_SPACE_ID        | contentful space id                    | Required                              |
| CONTNETFUL_ACCESS_TOKEN    | contentful access token                | Required                              |
