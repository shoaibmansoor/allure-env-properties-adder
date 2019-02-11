'use strict';
const AllureEnvPropsAdder = require('../../lib/index.js').AllureEnvPropsAdder;
const ARGS = {
    outputDir: 'auto-generated/allure-results',
    fileName: 'environment.properties',
    debug: true,
    override: false,
    props: {
        BASE_URL: 'http://google.com',
        BASE_URL1: 'http://google1.com',
    },
};

describe('Jasmine AllureEnvPropsAdder class Suite', () => {

    it('Check if AllureEnvPropsAdder has a property jasmineDone', () => {
        const obj = new AllureEnvPropsAdder(ARGS);
        expect(obj.hasOwnProperty('jasmineDone')).toBeTruthy();
    });

    it('Check if AllureEnvPropsAdder\'s jasmineDone is bound to an async function', () => {
        const obj = new AllureEnvPropsAdder(ARGS);
        expect(obj.jasmineDone.constructor.name === 'AsyncFunction').toBeTruthy();
    });
});
