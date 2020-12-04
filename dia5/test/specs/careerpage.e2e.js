

describe('Hoodoo career page', () => {

    before(()=> {
        browser.url('/careers/');
    })

    describe('should show 3 different labels', () => {
        const expectedTexts = ['remotaly', 'as a daveloper', 'working']   
        for (text of expectedTexts)
            it(`${text} validation`, () => {
                const title = $('h1 span.text-primary')
                expect(title).toHaveTextContaining(text, {
                    wait: 3000, message: `Text ${text} was not contained`,
                    ignoreCase: true, containig: true});
            });
    });

});


