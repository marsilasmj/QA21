import LoginPage from "../../support/pageObjects/LoginPage";

describe("this is hook ", () => {
  beforeEach("visity webpage", () => {
    cy.visit(Cypress.env("URL"));
  });

  it("Verify that a user can successfully log in with valid credentials.", () => {
    cy.fixture("examplelog").then((data) => {
      const mylogin_data = data.testcase1;

      LoginPage.username(mylogin_data.Valid_Username);
      LoginPage.Password(mylogin_data.Valid_Password);
      LoginPage.submit();

      cy.url().should("eq", "https://end-to-end-v1.onrender.com/home/");

      cy.get("h2").should("exist");
      cy.get("h2").should("be.visible");
      cy.get("h2").should("have.text", "Registered Users");
      cy.get("h2")
        .should("exist")
        .and("be.visible")
        .and("have.text", "Registered Users");
    });
  });

  it("Verify that the system behaber with an invalid username and valid password.", () => {
    cy.fixture("examplelog").then((data) => {
      const logindata = data.testcase2;
      cy.xpath("//input[@id='username']").type(logindata.invalid_Username);
      cy.xpath("//input[@id='password']").type(logindata.Valid_Password);
      cy.xpath("//button[@type='submit']").click(); // using xpath
    });

    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });

  it("Verify that the system handles invalid login credentials with an invalid password.", () => {
    cy.fixture("examplelog").then((data) => {
      const logindata = data.testcase3;
      cy.xpath("//input[@id='username']").type(logindata.Valid_Username);
      cy.xpath("//input[@id='password']").type(logindata.invalid_Password);
      cy.xpath("//button[@type='submit']").click(); // using xpath
    });
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });

  it("Verify that the system handles invalid login credentials with both an invalid username and an invalid password.", () => {
    cy.fixture("examplelog").then((data) => {
      const logindata = data.testcase4;
      cy.xpath("//input[@id='username']").type(logindata.invalid_Username);
      cy.xpath("//input[@id='password']").type(logindata.invalid_Password);
      cy.xpath("//button[@type='submit']").click(); // using xpath
    });
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });
});
