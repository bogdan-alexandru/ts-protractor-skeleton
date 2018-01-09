import  { HomePage } from '../page_objects/homePage'
import { browser, element, by } from 'protractor'
import { CareersPage } from '../page_objects/careersPage'

describe('goes to WAY2VAT Facebook page', () => {
    beforeAll(() => {
        browser.waitForAngularEnabled(false)
    })

    const homePage = new HomePage()

    it('goes to WAY2VAT home page', () => {
        homePage.get()
    })

    it('goes to careers', () => {
        homePage.getCareers()
    })

    const careersPage = new CareersPage()

    it('goes to Facebook Page', () => {
        careersPage.goToFacebookPage()

    })

    it('makes sure it went to WAY2VAT Facebook page', () => {
        element(by.className('_64-f')).getAttribute('href').then((t) => expect(t).toBe('https://www.facebook.com/way2vat/'))
    })
})
