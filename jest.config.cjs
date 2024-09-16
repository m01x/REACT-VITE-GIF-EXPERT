require('dotenv').config({ path: './.env.test' });

module.exports = {

    testEnvironment: 'jest-environment-jsdom',

    setupFiles: ['./jest.setup.js']

} 