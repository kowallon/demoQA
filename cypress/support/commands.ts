export {};
declare global {
  namespace Cypress {
    interface Chainable {
      getAny: () => Cypress.Chainable<JQuery<HTMLElement>>;
      clearSession(): void
      Allure(): any
      loginSamSim(username:string): any
    }
  }
}


Cypress.Commands.add(
  "getAny",
  { prevSubject: "element" },
  (subject: JQuery, size:number = 1) => {
    cy.wrap(subject).then((elementList) => {
      const sample = Cypress._.sampleSize(elementList.get(), size);
      const finalEl = sample.length > 1 ? sample : sample[0];
      cy.wrap(finalEl);
    });
  }
);


Cypress.Commands.add("clearSession", () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
    win.localStorage.clear();
    cy.clearCookies();
    cy.clearLocalStorage();
  });
});

Cypress.on("uncaught:exception", (err, promise) => {
  // returning false here prevents Cypress from
  // failing the test
  if (promise) {
    return false;
  }
  //    expect(err.message).to.include('$ is not defined')
  expect(err.message).to.include(
    "The following error originated from your application code"
  );
  return false;
});
