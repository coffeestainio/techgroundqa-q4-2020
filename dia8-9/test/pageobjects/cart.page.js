const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {

    //  reference to the cart page
    pageUrl = '/index.php?route=checkout/cart';

    rowByProductPlaceholder = '//div[@id="content"]//a[text()="[name]"]/ancestor::tr';

    rowByProductName (name) {
        return $(this.rowByProductPlaceholder.replace('[name]', name));
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open(this.pageUrl);
    }
}

module.exports = new CartPage();
