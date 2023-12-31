/// <reference types="Cypress" />

import { common } from "../../PageObjects/Common"
import { formsPage } from "../../PageObjects/FormsPage"
import { linksPage } from "../../PageObjects/LinksPage"
import { profilePage } from "../../PageObjects/ProfilePage"
import { singleBookPage } from "../../PageObjects/SingleBookPage"
import { storePage } from "../../PageObjects/StorePage"
import { visits } from "../../PageObjects/Visits"

describe('Submitting form', () => {

    beforeEach(() =>{
        linksPage
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