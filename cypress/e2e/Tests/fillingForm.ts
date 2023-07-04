/// <reference types="Cypress" />

import { common } from "../../PageObjects/Common"
import { formsPage } from "../../PageObjects/FormsPage"
import { profilePage } from "../../PageObjects/ProfilePage"
import { singleBookPage } from "../../PageObjects/SingleBookPage"
import { storePage } from "../../PageObjects/StorePage"
import { visits } from "../../PageObjects/Visits"

describe('Submitting form', () => {

    beforeEach(() =>{
        visits
        .visitFormsPage()
    })

    afterEach(() =>{
        cy.clearSession()
    })

    it("Fill and submit form", ()=>{
        formsPage
        .fillForm()
        .checkIfElementIsDisplayed(formsPage.confirmationModal)
    })

     
})