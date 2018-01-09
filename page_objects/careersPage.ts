import { browser, element, by } from 'protractor'

export class CareersPage {
    backendWebDeveloper = element(by.id('1495114416398-499aa407-23e9'))

    goToFacebookPage() {
        this.getFacebookLink().click()
    }

    private getFacebookLink() {
        browser.sleep(5000)
        this.backendWebDeveloper.click()
        browser.sleep(5000)

        return element(by.linkText('https://www.facebook.com/way2vat/'))
    }
}
