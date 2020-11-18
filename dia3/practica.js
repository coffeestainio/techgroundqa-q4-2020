const { remote } = require('webdriverio');
const colors = require('colors');


(async () => {
    const browser = await remote({
        // logLevel: 'silent',
        capabilities: {
            browserName: 'chrome',
  	        'goog:chromeOptions': {
        	// to run chrome headless the following flags are required
        	// (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        	//  args: ['--headless', '--disable-gpu'],
        	}
        },
    })

    console.log('** Started Execution **');
    await browser.url('https://webdriver.io');

    // await browser.debug();
    await (await browser.$('=Versions')).click();
    

    const labelUpdate = await browser.$('.docLastUpdate em'); 
    await labelUpdate.waitUntil( async function() {
        return await this.getText() === 'Last updated on 11/15/2020'
    }, {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
    });

    console.log('Result label: ', colors.bgGreen(colors.magenta(await labelUpdate.getText()))); 

    await browser.deleteSession();

 
})().catch((e) => console.error(e));
