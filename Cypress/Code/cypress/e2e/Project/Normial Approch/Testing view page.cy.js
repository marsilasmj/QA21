describe("testing view page", () => {
//   it("This test case verifies that only authenticated users can access the user detail page", () => {
//     cy.visit("https://end-to-end-v1.onrender.com/view_detail/84/");

//     // Assert url should be redirected to the login page.
//     cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
//   });

it.only("verify that the user detail page correctly displays the user's information, including their full name, username, email, role, date of birth, and address.", () => {
  // visit
  cy.visit("https://end-to-end-v1.onrender.com/");

  // login to the system
  cy.get("#username").type("testuserq");
  cy.get("#password").type("test");
  cy.get("button").click();

  // click on view button
  cy.xpath("//tbody/tr[1]/td[4]/a[1]").click();

  // extract parameter from URL
  cy.url().then((url)=>{
    


})
})
  it("This test case verifies that clicking on the QA-Test-Tool link in the navigation menu navigates the user to the home page.", () => {});

  it("This test case verifies that only authenticated users can access the user detail page", () => {});

  it("This test case ensures that clicking on the Log out link in the navigation menu allows the user to log out from the system.", () => {});

  it("verify that the home page includes a footer section with copyright information and a link to the Craft Knowledge website.", () => {});
});
