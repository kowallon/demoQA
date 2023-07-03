import { SingleBookPage } from "./SingleBookPage";

export class StorePage extends SingleBookPage{

    visitStorePage(){
        cy.visit("/")
        return this;
    }

    selectAnyBook(){
        cy.xpath("//a[contains(@href, '/books?book=')]").getAny().click()
    }
}

export const storePage = new StorePage();