describe("implicit assertion", () => {
  it("Positave assertion on URL", () => {
    // visity home page
    cy.visit("https://end-to-end-v1.onrender.com/");

    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();

    // 1. positave assertion on URL

    cy.url().should("eq", "https://end-to-end-v1.onrender.com/home/");
  });

  it("Short form of should", () => {
    // visity home page
    cy.visit("https://end-to-end-v1.onrender.com/");

    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();

    cy.url()
      .should("include", "https://end-to-end-v1.onrender.com/home/")
      .should("contain", "https://end-to-end-v1.onrender.com/home/")
      .should("eq", "https://end-to-end-v1.onrender.com/home/");
  });

  it("should with and", () => {
    // visity home page
    cy.visit("https://end-to-end-v1.onrender.com/");

    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();

    // 3. should with and

    cy.url()
      .should("include", "https://end-to-end-v1.onrender.com/home/")
      .and("contain", "https://end-to-end-v1.onrender.com/home/")
      .and("eq", "https://end-to-end-v1.onrender.com/home/");
  });

  it("Negative assertion", () => {
    // visity home page
    cy.visit("https://end-to-end-v1.onrender.com/");

    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();

    // 4. negative assertion

    cy.url()
      .should("not.include", "https://end-to-end-v1.onrender.com/home/")
      .and("not.contain", "https://end-to-end-v1.onrender.com/home/")
      .and("not.eq", "https://end-to-end-v1.onrender.com/home/");
  });

  it("Checking visiblity and existance", () => {
    // visity home page
    cy.visit("https://end-to-end-v1.onrender.com/");

    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();

    // 5. checking visiblity and existance

    cy.get("h2")
      .should("be.visible")
      .and("exist")
      .and("contain", "Registered Users");
  });
});
