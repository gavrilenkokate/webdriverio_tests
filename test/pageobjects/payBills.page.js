import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class payBillsPage extends Page {
    /**
       * define selectors using getter methods
       */
    get currencySelect() { return $('#pc_currency') }
    get inputAmount() { return $('#pc_amount') }
    get dollarsRadioBtn() { return $('#pc_inDollars_true') }
    get selectedCurrencyRadioBtn() { return $('#pc_inDollars_false') }
    get calculateCostsBtn() { return $('#pc_calculate_costs') }
    get purchaseBtn() { return $('#purchase_cash') }
    get sellRate() { return $('#sp_sell_rate') }
    get purchaseForeignCurrencyTabLink() { return $('a[href="#ui-tabs-3"]') }
    get purchaseCurrencyForm() { return $('#pc_purchase_currency_form') }
    get conversionAmount() { return $('#pc_conversion_amount') }
    get sellRate() { return $('#sp_sell_rate') }
    get message() { return $('#alert_content') }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    selectRandomCurrency() {
        let numberOfOptions = $$('#pc_currency > option').length;
        let randomCurrencyIdx = Math.floor(Math.random() * (numberOfOptions - 1) + 1);
        this.currencySelect.selectByIndex(randomCurrencyIdx);
        this.sellRate.waitForDisplayed();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('bank/pay-bills.html');
    }
}

export default new payBillsPage();