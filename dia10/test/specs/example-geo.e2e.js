const assert = require('assert')

describe.skip('Check Location overriding the timezone', () => {
    it('Check the default timezone', () => {
        browser.url('https://www.where-am-i.net/')
    })

    it('Check that London should be the timezone', () => {

        browser.cdp('Emulation', 'setGeolocationOverride' , {
            latitude:51.507351,
            longitude:-0.127758,
            accuracy: 1
        })
        browser.cdp('Emulation', 'setTimezoneOverride', {
            timezoneId: 'Europe/London'
        })       
        browser.pause(3000) // wait so you can notice the map changing
        let location = $('#location') // get a location reference for validation
        assert.equal(location.getText(), '51.507351, -0.127758')

    })

    it('Check that Tokyo should be the timezone', () => {
        // change to lo Tokyo location and timezone
        browser.cdp('Emulation', 'setGeolocationOverride' , {
            latitude:35.689487,
            longitude:139.691706,
            accuracy: 1
        })

        browser.cdp('Emulation', 'setTimezoneOverride', {
            timezoneId: 'Asia/Tokyo'
        })
        browser.pause(3000) // wait so you can notice the map changing
        assert.equal($('#location').getText(), '35.689487, 139.691706')
    })
});