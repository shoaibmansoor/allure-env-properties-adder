'use strict';

const minimist = require('minimist');
const MANDATORY_PARAMS_MESSAGE = 'props is a mandatory parameter';
// Supported args
// props, outputDir, fileName, help, override

const helpMessages = `
   props: K-V pairs to be displayed in Allure Report [mandatory]
   outputDir: Output directory where file should be saved [default: '.'] (optional)
   fileName: Name of the file [default: 'environment.properties'] (optional)
   override: override the existing file [default: true] (optional)
   debug: Get debuggging information [default: false] (optional)
   help: To get Help messages
`;

const paramsName = {
    props: 'props',
    outputDir: 'outputDir',
    fileName: 'fileName',
    override: 'override',
    help: 'help',
};

const message = (mandatoryMessage, name, value) => {
    return `${mandatoryMessage}\nUse --help to get help about supported arguments\n
    INFO:
    ${name} has incorrect value: ${value}`;
};

module.exports = {
    parseOptions: function parseOptions(args) {
        return minimist(args);
    },
    validateArgs: function(parsedArgs) {
        if (parsedArgs.help) {
            console.log('\x1b[32m%s\x1b[0m', helpMessages);
            process.exit(0);
        }
        try {
            if (!parsedArgs.props) {
                // eslint-disable-next-line max-len
                throw new Error(message(MANDATORY_PARAMS_MESSAGE, paramsName.props, parsedArgs.props));
            }
        } catch (e) {
            console.log('\x1b[31m%s\x1b[0m', e);
            process.exit(1);
        }
        return parsedArgs;
    },
};
