import LoginPage from '../pageobjects/login.page'
import PayBillsPage from '../pageobjects/payBills.page'

describe('E2E Tests -  Purchase foreign currency tests', () => {

    let amount = Math.floor(Math.random() * 1000) + 1;

    before(() => {

        LoginPage.open();
        LoginPage.login();

    });

    beforeEach(() => {

        PayBillsPage.open();
        PayBillsPage.purchaseForeignCurrencyTabLink.waitForDisplayed();
        PayBillsPage.purchaseForeignCurrencyTabLink.click();
        PayBillsPage.purchaseCurrencyForm.waitForDisplayed();

    });

    it('Should calculate foreign currency in U.S. dollar (USD) and make purchase ', () => {

        PayBillsPage.selectRandomCurrency();
        PayBillsPage.inputAmount.setValue(amount);
        PayBillsPage.dollarsRadioBtn.click();
    });

    it('Should calculate foreign currency in Selected currency and make purchase', () => {

        PayBillsPage.selectRandomCurrency();
        PayBillsPage.inputAmount.setValue(amount);
        PayBillsPage.selectedCurrencyRadioBtn.click();

    });

    afterEach(() => {

        PayBillsPage.calculateCostsBtn.click();
        expect(PayBillsPage.conversionAmount).toHaveTextContaining('U.S. dollar (USD)')
        PayBillsPage.purchaseBtn.click();
        expect(PayBillsPage.message).toHaveTextContaining('Foreign currency cash was successfully purchased.')

    });
});