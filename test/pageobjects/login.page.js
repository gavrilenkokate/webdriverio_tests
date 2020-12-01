import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
       * define selectors using getter methods
       */
    get inputUserLogin() { return $('#user_login') }
    get inputPassword() { return $('#user_password') }
    get btnSignIn() { return $('input[type="submit"]') }
    get alertError() { return $('div.alert.alert-error') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(username, password) {
        this.inputUserLogin.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSignIn.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login.html');
    }
}

export default new LoginPage();