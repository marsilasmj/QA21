//import LoginPage from "../../support/pageObjects/LoginPage";
import LoginPage from "../../support/pageObjects/LoginPage";

describe("Testing login functinalty ", () => {
  beforeEach("visity webpage", () => {
    // visit command
    cy.visit("https://end-to-end-v1.onrender.com/");
  });

  it("Verify that a user can successfully log in with valid credentials.", () => {
    cy.fixture("examplelog").then((data) => {
      const mylogin_data = data.TestCase1;

      // Using POM
      LoginPage.username(mylogin_data.username);
      LoginPage.Password(mylogin_data.password);
      LoginPage.submit();
    });

    // assertion about URL https://end-to-end-v1.onrender.com/home/.
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");

    // assertion about element in on home page
    cy.get("h2").should("exist");
    cy.get("h2").should("be.visible");
    cy.get("h2").should("have.text", "Registered Users");
    cy.get("h2")
      .should("exist")
      .and("be.visible")
      .and("have.text", "Registered Users");
  });

  it("Verify that the system behaber with an invalid username and valid password.", () => {
    // Using Fixuter
    cy.fixture("examplelog").then((data) => {
      const mylogin_data = data.TestCase2;

      // Using POM
      LoginPage.username(mylogin_data.username);
      LoginPage.Password(mylogin_data.password);
      LoginPage.submit();
    });

    //assertion about error message stating "Invalid credentials"
    cy.xpath("//li[@class='error']").should("have.text", "Invalid credentials"); //assertion about URL https://end-to-end-v1.onrender.com/.
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });

  it("Verify that the system behaber with an invalid username and valid password.", () => {
    // Using Fixuter
    cy.fixture("examplelog").then((data) => {
      const mylogin_data = data.TestCase3;

      // Using POM
      LoginPage.username(mylogin_data.username);
      LoginPage.Password(mylogin_data.password);
      LoginPage.submit();
    });

    //assertion about error message stating "Invalid credentials"
    cy.xpath("//li[@class='error']").should("have.text", "Invalid credentials");

    //assertion about URL https://end-to-end-v1.onrender.com/.
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });

  it("Verify system handles invalid login credentials with an invalid password.", () => {
    // Using Fixuter
    cy.fixture("examplelog").then((data) => {
      const mylogin_data = data.TestCase4;

      // Using POM
      LoginPage.username(mylogin_data.username);
      LoginPage.Password(mylogin_data.password);
      LoginPage.submit();
    });

    //assertion about error message stating "Invalid credentials"
    cy.xpath("//li[@class='error']").should("have.text", "Invalid credentials");

    //assertion about URL https://end-to-end-v1.onrender.com/.
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });
});
