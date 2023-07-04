import { Common } from "./Common";

export class ProfilePage extends Common{


//Selectors
profileUrl : string = "https://demoqa.com/profile"
deleteSVG : string = "#delete-record-undefined"
booksTable : string = ".rt-table"
firstBookTitle : string = "//div[@class='rt-table']//a"

//Methods

    visitProfile(){
        cy.visit(this.profileUrl)
        return this;
    }

    removeBooksOneByOne(){
        //intercept request because it has array which length = number of books
        cy.intercept({
            method : 'GET',
            url :'https://demoqa.com/Account/v1/User/72d5216b-9df3-418f-92c0-46de16d69c76'})
        .as('req')        

        cy.visit(this.profileUrl)
        //extract no of books from the request
        cy.get('@req').then((req : any ) =>{
            cy.log(req)
            cy.log(req.response.body.books.length)
            let numberOfBooks = req.response.body.books.length
        //use lenght of this array to loop through all bin SVGs
            cy.get('body').then((body) =>{
                if(body.find(this.deleteSVG).length >0){
                    for(let i = 0; i < numberOfBooks; i ++){
                    cy.get(this.deleteSVG).click()
                    cy.wait(1000)
                    cy.get('#closeSmallModal-ok').click({force: true})
                    }
                }
            })
        })

        
        return this;
    }

    checkIfBookTitleIsCorrect(alias : string){
        cy.get('@'+alias).then(title =>{
            cy.xpath(this.firstBookTitle).should('contain.text', title)
        })
        return this;
    }

}

export const profilePage = new ProfilePage();