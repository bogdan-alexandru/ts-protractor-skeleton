import { HomePage } from '../page_objects/homePage'
import { browser, element, by } from 'protractor'
import { ContactPage } from '../page_objects/contactPage'

describe('goes to contact and requests a demo', () => {
    beforeAll(() => {
        browser.waitForAngularEnabled(false)
    })

    const homePage = new HomePage()

    it('goes to WAY2VAT home page', () => {
        homePage.get()
    })

    it('goes to careers', () => {
        homePage.getContact()
    })

    const contactPage = new ContactPage()

    it('enters first name', () => {
        contactPage.setFirstName('first name')
    })

    it('enters second name', () => {
        contactPage.setSecondName('second name')
    })

    it('enters email', () => {
        contactPage.setEmail('email@yahoo.com')
    })

    it('enters company name', () => {
        contactPage.setCompanyName('it company')
    })

    it('enter the employees number', () => {
        contactPage.setEmployeesNumber('1-50')
    })

    it('enters the job title', () => {
        contactPage.setJobTitle('developer')
    })

    it('enters the location', () => {
        contactPage.setLocation('Romania')
    })

    it('enters the phone number', () => {
        contactPage.setPhoneNumber('0040123456789')
    })

    it('submits the request', () => {
        contactPage.submit()
        browser.sleep(5000)
    })

    it('should go to contact and request a demo', () => {
        element(by.className('vc_custom_heading')).getText().then((t) => expect(t).toBe('THANK YOU!'))
    })
})
