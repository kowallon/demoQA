

describe('example to-do app', () => {

    it("Visit homepage", ()=>{
        cy.visit("/")
        cy.xpath('//button[.="Login"]').click()
    })
     
    })