import LoginPage from '../pageobjects/login.page'

describe('E2E Tests -  Login/ Logout Form Tests', () => {

    beforeEach(() => {

        LoginPage.open();
        LoginPage.loginForm.waitForDisplayed();

    });

    it('Should not login with invalid credentials', () => {

        LoginPage.submitLoginForm('invalidUsername', 'invalidPassword');
        LoginPage.alertError.waitForDisplayed();
        expect(LoginPage.alertError).toHaveText('Login and/or password are wrong.');
    });

    it('Should login with valid credentials', () => {

        LoginPage.submitLoginForm('username', 'password');
        $('ul.nav.nav-tabs').waitForDisplayed();
    });

});
