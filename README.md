Allure Env Properties Adder
===

Node module to add K-V pairs to allure report

```shell
npm i allure-env-properties-adder

# For easier cli usage install the package globally
npm i -g allure-env-properties-adder
```

# Usage

From CLI:

```shell
npm i -g allure-env-properties-adder

# allure-env-properties-adder <K-V pairs>
allure-env-properties-adder "--props.K1=V1" "--props.K2=V2"
```

> Check `allure-env-properties-adder --help` to get full list of command line options

It can also be used with [Jasmine](https://www.npmjs.com/package/jasmine) and [Protractor with Jasmine](https://www.npmjs.com/package/protractor) frameworks programmatically

```javascript
const AllureEnvPropsAdder = require('allure-env-properties-adder').AllureEnvPropsAdder;

jasmine.getEnv().addReporter(new AllureEnvPropsAdder({
            outputDir: <path to allure-results dir>,       // optional [default: '.']
            fileName: <file-name>,      // optional [default: 'environment.properties']
            debug: false,               // optional [default: false]
            override: true,             // optional [default: true]
            props: {                    // mandatory {K-V pairs}
                BASE_URL: 'http://test.com',
                ENVIRONMENT: 'STAG',
            }
        }));

```

## Sample Report
![Allure Screenshot](https://raw.githubusercontent.com/shoaibmansoor/allure-env-properties-adder/master/resources/allure-report.png)


## Debugging
### CLI
Pass `--debug` with cli options
### Programmatically
Use `debug: true` when creating the object of AllureEnvPropsAdder
