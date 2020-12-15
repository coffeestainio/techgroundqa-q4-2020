const assert = require('assert')

describe('Check cookies', () => {
    it('Check the default timezone', () => {
        browser.url('https://www.where-am-i.net/')
    })

    it('Check that London should be the timezone', () => {

        const cookies = browser.cdp('Network', 'getAllCookies')
        console.log(cookies)

    })

    it('Emular que no hay internet', () => {

        browser.cdp('Network', 'emulateNetworkConditions', {
            offline: true,
            downloadThroughput: -1,
            uploadThroughput: -1,
            latency:200
        })
        browser.url('https://www.google.com')
        browser.pause(5000)

    })

});