const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {   /**
     * define selectors using getter methods
     */

     cardLocator = '//a[text()="[name]"]/ancestor::div[contains(@class,"product-thumb")]'

    get inputEmail () { return $('#input-email') }

    cardByProductName(name) {
        return $(this.cardLocator.replace('[name]', name))
    }

    btnAddProductToCartByName(name) {
        return this.cardByProductName(name).$(this.iconCartSelector);
    }

    btnAddProductToWishByName(name) {
        return this.iconHeartOnElement(this.cardByProductName(name));
    }

    btnGoToProductPageByName(name) {
        return $(this.iconCartPlaceholder.replace('[name]', name)).$('img')
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/index.php');
    }
}

module.exports = new HomePage();
