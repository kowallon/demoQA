import { StorePage } from "./StorePage";

export class Visits extends StorePage{


    visitFormsPage(){
        cy.visit("https://demoqa.com/automation-practice-form")
        return this;
    }

}

export const visits = new Visits();