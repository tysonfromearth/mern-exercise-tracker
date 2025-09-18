import request from 'supertest';
import app from '../app.js';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('Home Page', () => {
  it('should return a 200 status code', async () => {
    const response = await request(app).get('/');
    assert.strictEqual(response.statusCode, 200);
  });
});
