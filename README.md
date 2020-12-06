
## Automation UI Tests

## Features

### WebdriverIO v6

Browser and mobile automation test framework for Node.js

### Selenium Standalone Service

Helps to run Selenium seamlessly when running tests with the WDIO testrunner. 
It uses selenium-standalone NPM package that automatically sets up the standalone server and all required drivers.

### Mocha Framework

Mocha is a JavaScript test framework running on Node.js and in the browser.

### Page Object Pattern

Within web app's UI there are areas that tests interact with. A Page Object simply models these as objects within the test code.
This reduces the amount of duplicated code and means that if the UI changes, the fix need only be applied in one place. 
In other words one of the challenges of writing test automation is keeping selectors (classes, id's, or xpath' etc.) up to date with the latest version of code.
Instead of including our selectors in Spec file (Mocha), we place them in a <pagename>.js file where we can manage all these selectors and methods together. 
We can also place reusable functions or logic inside of these pages and call them from your step files. The page object serves as a layer of abstraction between tests and code. 
When A test fails, it fails on a individual step. That step may call a selector that is no longer valid, but that selector may be used by many other steps.
By having a single source of truth of what the selector is supposed to be, fixing one selector on the page object could repair a number of failing tests that were affected by the same selector.


### Spec Reporter

Spec Reporter prints detailed results to console.

### Allure Reporter

A WebdriverIO reporter plugin to create Allure Test Reports.
The Allure Reporter creates Allure test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots.

 
[WebdriverIO](https://webdriver.io/)

test2
