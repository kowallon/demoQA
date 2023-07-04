import { FormsPage } from "./FormsPage";

export class LinksPage extends FormsPage{

//Selectors
createdBtn : string = "#created"

//Methods

    verifyRequest = (aliasName: string, statusCode: number) => {
        cy.wait('@' + aliasName).then((req:any) =>{
            cy.log(req)
            expect(req.response.statusCode).to.eql(statusCode)
            expect(req.response.statusMessage).to.eql("Created")
            expect(req.response.headers['x-powered-by']).to.exist
            //expect(response.status).to.have.statusCode(200)
        })
        return this;
    };
   

}

export const linksPage = new LinksPage();