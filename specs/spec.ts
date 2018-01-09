import { browser, element, by, Key } from 'protractor'


describe('Way2VAT google search', () => {
    beforeAll( () => {
        browser.waitForAngularEnabled(false)
    })

    it('goes to google website', () => {
        browser.get('http://www.google.com')

        const title = 'Google'

        browser.getTitle().then( (text) => {
            expect(text).toEqual(title)
        })


    })

    it('searches for way2vat',  () => {

        element(by.css('input[type="text"]')).sendKeys('way2vat', Key.ENTER)
    })

    it('makes sure the first result in the page is our website', () => {
        element.all(by.className('g')).first().element(by.css('link')).getAttribute('href').then( (t) => {
            expect(t).toBe('http://way2vat.com/')
        })
    })

})
