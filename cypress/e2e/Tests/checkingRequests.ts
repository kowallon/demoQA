/// <reference types="Cypress" />

import { common } from "../../PageObjects/Common"
import { formsPage } from "../../PageObjects/FormsPage"
import { linksPage } from "../../PageObjects/LinksPage"
import { profilePage } from "../../PageObjects/ProfilePage"
import { singleBookPage } from "../../PageObjects/SingleBookPage"
import { storePage } from "../../PageObjects/StorePage"
import { visits } from "../../PageObjects/Visits"

describe('Checking request', () => {

    beforeEach(() =>{
        visits
        .visitLinksPage()
    })

    afterEach(() =>{
        cy.clearSession()
    })

    it("Verify request headers", ()=>{
        linksPage
        .catchRequest('GET', 'https://demoqa.com/created', 'created')
        .clickElementWithForce(linksPage.createdBtn)
        .verifyRequest('created', 201)
        
    })

     
})