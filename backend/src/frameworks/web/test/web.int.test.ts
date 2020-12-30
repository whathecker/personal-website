import supertest from 'supertest';
import server from '../index';

describe('End-to-end test for API endpoints of books api', () => {
  test('List request should works', () => {
    return supertest(server)
      .get('/books')
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.books.length).toBeGreaterThan(0);
      });
  });
});
