const assert = require('assert');
const app = require('../app');
const request = require('supertest');

describe('Test post method', () => {
    it('Post method can return sqr of num', async () => {
        const response = await request(app).post('/testing').send({ num: 10 });
        assert(response.status === 201);
        assert(response.text === '100');
        // assert(response.body === 'Everything is OK!');
    });
});
