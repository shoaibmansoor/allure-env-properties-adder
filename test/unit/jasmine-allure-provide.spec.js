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

    it('Check if AllureEnvPropsAdder has a property jasmineStarted', () => {
        const obj = new AllureEnvPropsAdder(ARGS);
        expect(obj.hasOwnProperty('jasmineStarted')).toBeTruthy();
    });

    it('Check if AllureEnvPropsAdder\'s jasmineStarted is bound to an async function', () => {
        const obj = new AllureEnvPropsAdder(ARGS);
        expect(obj.jasmineStarted.constructor.name === 'AsyncFunction').toBeTruthy();
    });
});
