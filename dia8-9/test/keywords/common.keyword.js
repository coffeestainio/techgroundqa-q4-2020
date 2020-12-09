
const loginAndCheckout = function (testData) {
    Login.login(testData);
    HomePage.open()
    HomePage.addProductToCart();
    CartPage.open();
    CartPage.checkout();
    PaymentPage.submit();
};


const registerloginAndCheckout = function (testData) {
    registerUser()
    loginAndCheckout();
};


