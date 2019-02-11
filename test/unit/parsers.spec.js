'use strict';
const optionsParser = require('../../lib/parse-options');
const ARGS = ['--props.BASEURL=X', '--debug', '--verbose', '--override'];

describe('Parser-Options Suites', () => {

    it('Check if parser is not throwing any errors', () => {
        let error;
        try {
            optionsParser.parseOptions(ARGS);
        } catch (e) {
            error = e;
        }
        expect(error).toBeUndefined();
    });

    it('Check if parser is returning objects', () => {
        expect(optionsParser.parseOptions(ARGS)).toBeDefined();
    });

    it('Check if K-V are bound correctly to props object', () => {
        const options = optionsParser.parseOptions(ARGS);
        expect(options.props.BASEURL).toEqual('X');
    });

    it('Check if boolean props have correct values', () => {
        const options = optionsParser.parseOptions(ARGS);
        expect(options.debug).toBeTruthy();
    });
});
