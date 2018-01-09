import { browser, element, by } from 'protractor'

export class HomePage {

    headerDemoButton = element.all(by.className('mk-header-holder')).first().element(by.tagName('li')).element(by.tagName('a'))
    menuIcon = element(by.className('mk-css-icon-menu icon-size-big'))
    menuSideDashboard = element(by.id('mk-sidedash-navigation'))

    get() {
        browser.get('http://way2vat.com')
    }

    getDemo() {
        return this.headerDemoButton.click()
    }

    getMenu() {
        this.menuIcon.click()
    }

    getCareers() {
        this.getMenu()
        browser.sleep(5000)

        this.menuSideDashboard.element(by.id('menu-item-914')).element(by.tagName('a')).click()
    }

    getContact() {
        this.getMenu()
        browser.sleep(5000)

        this.menuSideDashboard.element(by.id('menu-item-269')).element(by.tagName('a')).click()
    }
}
