export class Common {

//Selectos

loginBtn : string = '#login'


//Methods

    logIn(){
        cy.fixture('login').then(data =>{
            var user = data.user
            var pass = data.pass

            cy.xpath('//input[@placeholder="UserName"]').click().type(user)

            cy.get('#password').click().type(pass)

            cy.get(this.loginBtn).click()          

            // cy.request({
            //    method: 'POST',
            //    url: 'https://demoqa.com/Account/v1/Login',
            //    headers: {
            //     'accept': 'application/json',
            //     'Content-Type': 'application/json'
            //    },
            //    body: {
            //     "userName": user,
            //     "password": pass
            //   }
            // })
        })
        return this;
    };

    waitForServiceResponse = (aliasName: string, statusCode: number) => {
        cy.wait('@' + aliasName).its('response.statusCode').should('eq', statusCode);
        return this;
    };

    catchRequest = (method: string, url: string, alias: string) => {
        cy.intercept({
            method: method,
            url: url,
            times: 1
        }).as(alias);
        return this;
    };


    clickElementWithForce(selector : string){
        cy.get(selector).click({force: true})
        return this;
    };

    elementIsNotDisplayed(selector : string){
        cy.get(selector).should('not.exist')
        return this;
    }

    saveValueFromXpath(selector : string, alias: string){
        cy.xpath(selector).invoke('text').as(alias)
        return this;
    }

    checkIfElementIsDisplayed(selector : string){
        cy.get(selector).should('be.visible')
        return this;
    }

    checkIfElementIsOfCorrectType(selector :string, index : number, type :string){
        cy.get(selector).eq(index).should("be.a", type)
        return this;
    }

}

export const common = new Common();