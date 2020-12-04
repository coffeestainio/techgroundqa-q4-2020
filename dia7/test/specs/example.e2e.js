const axios = require('axios');
const { assert } = require('console');
const fs = require('fs');

describe('My Login application', () => {

    it.skip('should login with valid credentials', () => {
    
        console.log('inicio del test')
        browser.call(()=> {
            return axios({
                method: 'get',
                url: 'https://www.google.com'
              })
                .then(function (response) {
                   console.log('otuve la respuesta')
                   assert(response.status == 200)
                });
            });
        console.log('final del test')
    });

    it('inject javascript', () => {
        console.log('I AM ON NODE');
        browser.execute(()=>{
            console.log('I AM ON THE BROWSER');
        })
        browser.url('https://stanfordhealthcare.org/');
        let header = $('#new-emergency-alert');
        header.removeItself();

        let logo = $$('#shc-logo')[0];
        logo.removeItself()
        // browser.debug()
    });

    it('verify add command', ()=>{
        browser.pageDetails();
        browser.debug();
    })
});


