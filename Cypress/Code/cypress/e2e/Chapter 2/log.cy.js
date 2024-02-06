describe("Test Suite 1", () => {
  it("Test case 1", () => {
    
    cy.log("Test Starting");

    cy.visit("https://www.google.com")

    cy.log(cy.url())
  });

});
