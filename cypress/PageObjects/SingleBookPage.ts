import { ProfilePage } from "./ProfilePage";

export class SingleBookPage extends ProfilePage{

//Selectors
addBookBtn : string = "#addNewRecordButton"

//Methods

    addBookToCollection(){
        cy.xpath("//button[contains(text(), 'Add')]").click()
        return this;
    }


}

export const singleBookPage = new SingleBookPage();