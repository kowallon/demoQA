import { Visits } from "./Visits";

export class FormsPage extends Visits{

//Selectors
firstName : string = "#firstName"
LName : string = "#lastName"
emailInput : string = "#userEmail"
maleGender : string = "#gender-radio-1"
number : string = "#userNumber"
birthDate : string = "#dateOfBirthInput"
subjectsField : string = "#subjectsContainer"
hobbiesCheckboxes : string = "#hobbies-checkbox-"
upload : string = "input[type=file]"
addressBox : string = "#currentAddress"
state : string = "#state"
city : string = "#city"
submitBtn : string = "#submit"
confirmationModal : string = ".modal-content"


//Methods

    fillForm(){
        cy.fixture('form').then(data =>{
           var name = data.name
           var lastName = data.lastName
           var email = data.email
           var mobile = data.mobile
           var subjects = data.subjects
           var address = data.address

            cy.get(this.firstName).click().type(name)

            cy.get(this.LName).click().type(lastName)

            cy.get(this.emailInput).click().type(email)

            cy.get(this.maleGender).click({force: true})

            cy.get(this.number).click().type(mobile)

            cy.get(this.birthDate).click()
            cy.get("select").eq(0).select("March")
            cy.get("select").eq(1).select("1968")
            cy.xpath("(//div[@class='react-datepicker__week']/div[.='2'])[1]").click()
            
            var randomIndex = Math.floor(Math.random()*3)+1

            cy.get(this.subjectsField).click().type(`${subjects[0]}{enter}`)
            cy.get(this.subjectsField).click().type(`${subjects[1]}{enter}`)

            cy.get(this.hobbiesCheckboxes+randomIndex).check({force: true})

            cy.get(this.upload).selectFile('cypress/fixtures/form.json')


            cy.wait(2000)

            cy.get(this.addressBox).click().type(address)

            var randomStateIndex = Math.floor(Math.random()*4)

            var CityIndexMultiplier = randomStateIndex > 2 ? 2 : 3

            var randomCityIndex = Math.floor(Math.random()*CityIndexMultiplier)

            cy.get(this.state).click().get("#react-select-3-option-"+randomStateIndex).click({force: true})

            cy.get(this.city).click().get("#react-select-4-option-"+randomCityIndex).click({force: true})

            cy.get(this.submitBtn).click()

        })
        return this;
    }

}

export const formsPage = new FormsPage();