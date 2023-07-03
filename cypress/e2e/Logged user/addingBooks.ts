/// <reference types="Cypress" />

import { common } from "../../PageObjects/Common"
import { profilePage } from "../../PageObjects/ProfilePage"
import { singleBookPage } from "../../PageObjects/SingleBookPage"
import { storePage } from "../../PageObjects/StorePage"
import { visits } from "../../PageObjects/Visits"

describe('Adding and removing books', () => {

    beforeEach(() =>{
        storePage
        .visitStorePage()
        .clickElementWithForce(common.loginBtn)
        .catchRequest('POST', 'https://demoqa.com/Account/v1/Login', 'login')
        .logIn() 
        .waitForServiceResponse('login', 200)
    })

    it("Add any book to Collection", ()=>{
        storePage
        .selectAnyBook()
        singleBookPage
        .addBookToCollection()
        profilePage
        .removeBooksOneByOne()
        .elementIsNotDisplayed(profilePage.deleteSVG)
    })
     
    })