const fs = require('fs');
const Logger = require('./logger');
const path = require('path');
const optionsParser = require('./parse-options.js');
const ENV_FILE_NAME = 'environment.properties';

async function main(arguments, cli = false) {
    const args = cli ? getCliArgs(arguments): arguments;
    const logger = new Logger(args.debug);
    logger.log(`Args from process: ${JSON.stringify(arguments)}`);

    // throw error if mandatory params are not provided
    optionsParser.validateArgs(args);

    // get file path
    const filePath = getTargetFile(args.outputDir || '.', args.fileName || ENV_FILE_NAME);
    logger.log(`FilePath: ${filePath}`);

    // create-write output data
    let data = '';
    Object.entries(args.props).forEach(([key, value]) => data=`${data}${key}=${value}\n`);
    logger.log(`Output: ${data}`);
    const override = args.override === undefined || args.override === true;
    logger.log(`Override: ${override}`);
    writeFile(filePath, data.trim(), override, logger);
};

/**
 * Validate cli args & throw error if any incorrect args are passed
 * @type {*|{_}|argv}
 */
function getCliArgs(cliArguments) {
    return optionsParser.parseOptions(cliArguments);
}

function getTargetFile(outputDir, filename) {
    if (outputDir) {
        return path.join(outputDir, filename);
    } else {
        return path.join(filename);
    }
}

function writeFile(path, data, override, logger) {
    // create path if provided path does not exist
    ensureDirectoryExistence(path);
    if (override || !fs.existsSync(path)) {
        fs.writeFile(path, data, function(err) {
            if(err) {
                throw err;
            }
            logger.log("The file was saved!");
        });
    }
}

function ensureDirectoryExistence(filePath) {
    let dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

function AllureEnvPropsAdder(properties) {
    let self = this;
    self.properties = properties;
    self.jasmineStarted = async function() {
        await main(self.properties, false)
    }
}

module.exports = {main, AllureEnvPropsAdder};