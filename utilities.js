const fs = require('fs');
const Path = require('path');
const allure = require('@wdio/allure-reporter').default;


class Utilities {

    static takeScreenshot(name, failurde = false) {

        const path = './testsResults/screenshots/';

        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }
        if (failure) {
            name = name + '_fail';
        }
        name = name.replace(/ /g, '_') + '.png';
        browser.pause(500);
        browser.saveScreenshot(path + name);

        const data = fs.readFileSync(`${path}/${name}`);
        allure.addAttachment(name, data, 'image/png');

    }

    static deleteFolderRecursive(path) {
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach((file, index) => {
                const curPath = Path.join(path, file);
                if (fs.lstatSync(curPath).isDirectory()) { // recurse
                    this.deleteFolderRecursive(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            // fs.rmdirSync(path);
        }
    }

    static deleteFile(path) {
        if (fs.existsSync(path)) {
            fs.unlinkSync(path)
        }
    }
}
module.exports = Utilities;
