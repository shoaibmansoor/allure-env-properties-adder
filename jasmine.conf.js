'use strict';

const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

jasmine.loadConfig({
    spec_dir: 'test',
    spec_files: [
        '**/*.spec.js',
    ],
});
jasmine.env.clearReporters();
jasmine.env.addReporter(new SpecReporter({
    spec: {
        displayPending: true,
    },
}));

jasmine.execute();
