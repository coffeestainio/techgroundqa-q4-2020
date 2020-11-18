const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'silent',
        capabilities: {
            browserName: 'chrome'
        },
    })

    await browser.url('https://develop.terapeutica.digital');
    
    const barraBusqueda = await browser.$('#search-input');
    await barraBusqueda.click();
    await barraBusqueda.setValue("Maria");

    const title = await browser.getTitle();

    console.log(title);


    await browser.deleteSession();
})().catch((e) => console.error(e))
