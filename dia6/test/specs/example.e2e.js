const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Login application', () => {

    beforeEach(()=>{
        LoginPage.open();
    })

    it('should login with valid credentials', () => {
        LoginPage.login('standard_user', 'secret_sauce');
        expect(InventoryPage.inventoryContainer).toBeExisting();
    });

    it('should not login with locked credentials', () => {
        const lockedError = 'Sorry, this user has been locked out.'
        LoginPage.login('locked_out_user', 'secret_sauce');
        expect(LoginPage.errorMessage).toHaveTextContaining(lockedError);
    });

    it('should not login with invalid credentials', () => {
        const lockedError = 'Username and password do not match any user in this service'
        LoginPage.login('locked_out_user', 'secret_sauce!');
        expect(LoginPage.errorMessage).toHaveTextContaining(lockedError);
    });
});