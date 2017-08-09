const assert = require('assert');
const app = require('../app');
const request = require('supertest');

describe('Test get method home', () => {
    it('Home route can send correctly', async () => {
        const response = await request(app).get('/');
        assert(response.status === 200);
        // assert(response.body === 'Everything is OK!');
    });
});
