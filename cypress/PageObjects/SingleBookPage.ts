import { ProfilePage } from "./ProfilePage";

export class SingleBookPage extends ProfilePage{

//Selectors
addBookBtn : string = "#addNewRecordButton"
bookTitle : string = "//div[@id='title-wrapper']/div[2]/label"
ISBNprop : string = "#ISBN-wrapper"
TitleProp : string = "#title-wrapper"
SubTitleProp : string = "#subtitle-wrapper"
AuthorProp : string = "#author-wrapper"
PublisherProp : string = "#publisher-wrapper"
PagesProp : string = "#pages-wrapper"
DescriptionProp : string = "#description-wrapper"
WebsiteProp : string = "#website-wrapper"

//Methods

    addBookToCollection(){
        cy.xpath("//button[contains(text(), 'Add')]").click()
        return this;
    }

}

export const singleBookPage = new SingleBookPage();