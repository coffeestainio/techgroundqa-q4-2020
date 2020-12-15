devices = ['iPhone X','iPad Pro'];

describe.skip ('Test for devices ', function ()  {

    for (const device of devices){

        describe(`Emulate Devices - testing on: ${device}`,function () {

            before(() => {
                browser.emulateDevice(device)
            })

            it('go to google', ()=> {
                browser.url('https://www.google.com')

                if (device === 'iPhone X'){
                    expect($('[aria-label=promo]')).toBeVisible()
                }
                else{
                    expect($('[aria-label=promo]')).not.toBeVisible() 
                }


            })

        });
    }

})