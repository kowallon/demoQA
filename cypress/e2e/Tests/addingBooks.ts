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

    afterEach(() =>{
        cy.clearSession()
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

    it("Check if correct title is displayed", ()=>{
        storePage
        .selectAnyBook()
        singleBookPage
        .saveValueFromXpath(singleBookPage.bookTitle, "bookTitle")
        .addBookToCollection()
        .visitProfile()
        profilePage
        .checkIfBookTitleIsCorrect("bookTitle")
    })

    it("Check if all book properties are displayed", ()=>{
        storePage
        .selectAnyBook()
        singleBookPage
        .checkIfElementIsDisplayed(singleBookPage.ISBNprop)
        .checkIfElementIsDisplayed(singleBookPage.TitleProp)
        .checkIfElementIsDisplayed(singleBookPage.SubTitleProp)
        .checkIfElementIsDisplayed(singleBookPage.AuthorProp)
        .checkIfElementIsDisplayed(singleBookPage.PublisherProp)
        .checkIfElementIsDisplayed(singleBookPage.PagesProp)
        .checkIfElementIsDisplayed(singleBookPage.DescriptionProp)
        .checkIfElementIsDisplayed(singleBookPage.WebsiteProp)

    })

    it("Check if same book cannot be added twcie", ()=>{
        profilePage
        .visitProfile()
        .clickElementWithText(profilePage.removeAllBooksBtnText)
        .clickElementWithForce(profilePage.closeModalBtn)
        storePage
        .visitStorePage()
        .clickElementWithText("Git Pocket Guide")
        singleBookPage
        .addBookToCollection()
        storePage
        .visitStorePage()
        .clickElementWithText("Git Pocket Guide")
        singleBookPage
        .addBookToCollection()
        .catchRequest('GET', 'https://demoqa.com/Account/v1/User/72d5216b-9df3-418f-92c0-46de16d69c76', 'Profile')
        .visitProfile()
        profilePage
        .checkNumberOfBooks('Profile', 1)
    })
     
    it.only("Check if all books can be added", ()=>{
        storePage
        .catchRequest('GET', 'https://demoqa.com/BookStore/v1/Books', 'books')
        .visitStorePage()
        .addAllBooks('books')
        .catchRequest('GET', 'https://demoqa.com/Account/v1/User/72d5216b-9df3-418f-92c0-46de16d69c76', 'Profile')
        .visitProfile()
        profilePage
        .checkNumberOfBooks('Profile', 8)
    })

})