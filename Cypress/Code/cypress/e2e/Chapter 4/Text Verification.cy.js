describe("Testing html element", () => {
  it("Text verification using should", () => {
    cy.visit("https://html-element-for-testing.onrender.com/index.html");
    cy.get("#text")
      .should("exist")
      .and("be.visible")
      .and("have.text", "This is QA calss at Craft");
  });
  it("Text verification using expect", () => {
    cy.visit("https://html-element-for-testing.onrender.com/index.html");

    cy.get("#text").then((e) => {
      const t = e.text();
      expect(t).to.contains("This is QA calss at Craft");
    });
  });
});
