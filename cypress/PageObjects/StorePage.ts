import { SingleBookPage } from "./SingleBookPage";

export class StorePage extends SingleBookPage{

    visitStorePage(){
        cy.visit("/")
        return this;
    }

    selectAnyBook(){
        cy.xpath("//a[contains(@href, '/books?book=')]").getAny().click()
    }

    addAllBooks(alias : string){
        cy.wait('@'+alias).then(resp =>{
            console.log(resp.response.body.books.length)
            let numberOfBooks = resp.response.body.books.length
            for(let i = 1; i< numberOfBooks+1; i++){
                cy.xpath(`(//a[contains(@href, '/books?book=')])[${i}]`).click()
                cy.contains("Add To Your Collection").click()
                cy.contains("Back To Book Store").click()
            }
        })
        return this;
    }
}

export const storePage = new StorePage();