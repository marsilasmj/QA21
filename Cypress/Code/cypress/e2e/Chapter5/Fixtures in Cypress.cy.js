describe("Testing login functinalty ", () => {
  beforeEach("visity webpage", () => {
    // visit command
    cy.visit("https://end-to-end-v1.onrender.com/");
  });

  it("Verify that a user can successfully log in with valid credentials.", () => {
    // using fixuter
    cy.fixture("loginTestData").then((data) => {
      const logindata = data.TestCase1;
      cy.xpath("//input[@id='username']").type(logindata.username);
      cy.xpath("//input[@id='password']").type(logindata.password);
      cy.xpath("//button[@type='submit']").click();
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
    // using fixuter
    cy.fixture("examplelog").then((data) => {
      const logindata = data.TestCase2;
      cy.xpath("//input[@id='username']").type(logindata.username);
      cy.xpath("//input[@id='password']").type(logindata.password);
      cy.xpath("//button[@type='submit']").click();
    });

    //assertion about error message stating "Invalid credentials"
    cy.xpath("//li[@class='error']").should("have.text", "Invalid credentials");

    //assertion about URL https://end-to-end-v1.onrender.com/.
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });
  it("Verify system handles invalid login credentials with an invalid password.", () => {
    // Using Fixuter
    cy.fixture("examplelog").then((data) => {
      const logindata = data.TestCase4;
      cy.xpath("//input[@id='username']").type(logindata.username);
      cy.xpath("//input[@id='password']").type(logindata.password);
      cy.xpath("//button[@type='submit']").click();
    });

    //assertion about error message stating "Invalid credentials"
    cy.xpath("//li[@class='error']").should("have.text", "Invalid credentials");

    //assertion about URL https://end-to-end-v1.onrender.com/.
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });
});
