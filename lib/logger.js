'use strict';

class Logger {
    constructor(debug) {
        this.debug = debug;
    }
    log(message) {
        if (this.debug) {
            console.log(message);
        }
    }
}
module.exports = Logger;
