#!/usr/bin/env node

'use strict';
const AllureEnvPropsAdder = require('../lib/index.js');

AllureEnvPropsAdder.main(process.argv.slice(2), true)
    .catch((err) => {
        console.log('\x1b[31m%s\x1b[0m', `${err}`);
        process.exit(1);
    });
