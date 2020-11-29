const LoginPage = require('../pageobjects/login.page');

describe('E2E Tests -  Login/ Logout Form Tests', () => {

    beforeEach(() => {

        LoginPage.open();

    });

    it('Should not login with invalid credentials', () => {

        LoginPage.login('invalidUsername', 'invalidPassword');
        LoginPage.alertError.waitForDisplayed();
        expect(LoginPage.alertError).toHaveText('Login and/or password are wrong.');
    });

    it('Should login with valid credentials', () => {

        LoginPage.login('username', 'password');
        $('ul.nav.nav-tabs').waitForDisplayed();
    });

});