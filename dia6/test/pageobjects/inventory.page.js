const Page = require('./page');

class InventoryPage extends Page {
    get inventoryContainer () { return $('#inventory_container') }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new InventoryPage();
