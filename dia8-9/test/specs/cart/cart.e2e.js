const HomePage = require('../../pageobjects/home.page');
const CartPage = require('../../pageobjects/cart.page');
const ProductPage = require('../../pageobjects/product.page');

const testProduct = {
    name: 'MacBook',
    quantiy: 1
};

function validateProductOnCart(){
    const expectedMessage = `Success: You have added ${testProduct.name} to your shopping cart!`
    expect(HomePage.alertSuccess).toHaveTextContaining(expectedMessage);

    CartPage.open();
    expect(CartPage.rowByProductName(testProduct.name)).toExist();
}

describe('Cart Feature', () => {

    beforeEach( () => {
        HomePage.open();
    })

    it('add an element to the cart from the homepage', () => {       
        HomePage.btnAddProductToCartByName(testProduct.name).click() 
        
        validateProductOnCart()
    });

    it('add an element to the cart from the productPage', () => {       
        HomePage.btnGoToProductPageByName(testProduct.name).click();
        ProductPage.btnAddToCart.click() 

        validateProductOnCart()
    });
    
});
