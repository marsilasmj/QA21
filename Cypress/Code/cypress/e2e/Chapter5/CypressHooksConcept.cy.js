describe("this is hook ", () => {
  beforeEach("visity webpage", () => {
    cy.visit("https://end-to-end-v1.onrender.com/");
  });

  it("Verify that a user can successfully log in with valid credentials.", () => {
    cy.xpath("//input[@id='username']").type("testuserq");
    cy.xpath("//input[@id='password']").type("test");
    cy.xpath("//button[@type='submit']").click();
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
    cy.xpath("//input[@id='username']").type("username");
    cy.xpath("//input[@id='password']").type("test");
    cy.xpath("//button[@type='submit']").click(); // using xpath

    cy.url().should("eq", "https://end-to-end-v1.onrender.com/home/");

    cy.get("h2").should("exist");
    cy.get("h2").should("be.visible");
    cy.get("h2").should("have.text", "Registered Users");
    cy.get("h2")
      .should("exist")
      .and("be.visible")
      .and("have.text", "Registered Users");
  });

  it("Verify that the system handles invalid login credentials with an invalid password.", () => {
    cy.xpath("//input[@id='username']").type("test");
    cy.xpath("//input[@id='password']").type("password");
    cy.xpath("//button[@type='submit']").click(); // using xpath

    cy.url().should("eq", "https://end-to-end-v1.onrender.com/home/");

    cy.get("h2").should("exist");
    cy.get("h2").should("be.visible");
    cy.get("h2").should("have.text", "Registered Users");
    cy.get("h2")
      .should("exist")
      .and("be.visible")
      .and("have.text", "Registered Users");
  });

  it("Verify that the system handles invalid login credentials with both an invalid username and an invalid password.", () => {
    cy.xpath("//input[@id='username']").type("username");
    cy.xpath("//input[@id='password']").type("passowrd");
    cy.xpath("//button[@type='submit']").click(); // using xpath

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
