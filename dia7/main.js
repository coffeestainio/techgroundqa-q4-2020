const { remote } = require('webdriverio')
const sync = require('@wdio/sync').default

remote({
    runner: 'local',
    outputDir: __dirname,
    capabilities: {
        browserName: 'chrome'
    }
}).then((browser) => sync(() => {

    //empezar
    // browser.url('https://zzzscore.com/1to50/en/');
    // for (i = 1; i <= 50; i++){
    //     browser.$(`//div[text()='${i}']`).click()
    // }
    // browser.debug()

    browser.url('https://zzzscore.com/dontap/en/')

    for(i = 0 ; i < 100 ; i++){
        console.log(i)
        // browser.pause(100)
        element = browser.$('.tab.b');
        element.waitForClickable()
        element.click()
    }
}))