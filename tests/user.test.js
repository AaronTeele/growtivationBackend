const {app} = require('../app');
const request = require('supertest');
jest.mock('../services/user')
const userService = require('../services/user');

test('read services test', done => {
    userService.read.mockImplementation(() => Promise.resolve({
        test: '1'
    }))
    request(app)
    .get('/user/1')
    .then(res => {
        expect(res.body).toEqual({test: '1'});
        done()
    })
})