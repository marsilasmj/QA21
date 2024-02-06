
describe("this is hook ", () => {
  beforeEach("visity webpage", () => {
    cy.visit("https://end-to-end-v1.onrender.com/");
  });

  it("Verify that a user can successfully log in with valid credentials.", () => {
    cy.fixture("loginTestData").then((data) => {
      const mylogin_data = data.Testcase1;

      cy.mylogin(mylogin_data.username, mylogin_data.passowrd);
    });

    cy.url().should("eq", "https://end-to-end-v1.onrender.com/home/");

    cy.get("h2").should("exist");
    cy.get("h2").should("be.visible");
    cy.get("h2").should("have.text", "Registered Users");
    cy.get("h2")
      .should("exist")
      .and("be.visible")
      .and("have.text", "Registered Users");
  });

  it("Verify that the system behaber with an invalid username and valid password.", () => {
    cy.fixture("examplelog").then((data) => {
      const logindata = data.testcase2;
      cy.mylogin("username", "test");
    });

    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });

  it("Verify that the system handles invalid login credentials with an invalid password.", () => {
    cy.fixture("examplelog").then((data) => {
      const logindata = data.testcase3;
      cy.mylogin(logindata.Valid_Username, logindata.invalid_Password);
    });
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });

  it("Verify that the system handles invalid login credentials with both an invalid username and an invalid password.", () => {
    cy.fixture("examplelog").then((data) => {
      const logindata = data.testcase4;
      cy.mylogin(logindata.invalid_Username, logindata.invalid_Password);
    });
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });
});
