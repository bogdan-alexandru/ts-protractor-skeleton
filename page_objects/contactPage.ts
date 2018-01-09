import { element, by } from 'protractor'

export class ContactPage {

    firstName = element(by.name('mauticform[first_name]'))
    secondName = element(by.name('mauticform[last_name]'))
    email = element(by.name('mauticform[work_email]'))
    companyName = element(by.name('mauticform[company_name]'))
    employeesNumber = element(by.name('mauticform[company_size]'))
    jobTitle = element(by.name('mauticform[job_title]'))
    location = element(by.name('mauticform[location]'))
    phoneNumber = element(by.name('mauticform[phone_number]'))
    submitButton = element(by.name('mauticform[submit]'))

    setFirstName(firstName: string) {
        this.firstName.sendKeys(firstName)
    }

    setSecondName(secondName: string) {
        this.secondName.sendKeys(secondName)
    }

    setEmail(email: string) {
        this.email.sendKeys(email)
    }

    setCompanyName(companyName: string) {
        this.companyName.sendKeys(companyName)
    }

    setEmployeesNumber(employeesNumber: string) {
        this.employeesNumber.element(by.cssContainingText('option', employeesNumber)).click()
    }

    setJobTitle(jobTitle: string) {
        this.jobTitle.sendKeys(jobTitle)
    }

    setLocation(location: string) {
        this.location.element(by.cssContainingText('option', location)).click()
    }

    setPhoneNumber(phoneNumber: string) {
        this.phoneNumber.sendKeys(phoneNumber)
    }

    submit() {
        this.submitButton.submit()
    }
}
