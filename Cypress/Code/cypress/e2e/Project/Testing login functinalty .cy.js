describe("Testing login functinalty ", () => {
  it("Verify that a user can successfully log in with valid credentials.", () => {
    // test steps
    // 1. Open the web browser and navigate to https://end-to-end-v1.onrender.com/.
    cy.visit("https://end-to-end-v1.onrender.com/");
    // 2. Enter the valid username
    // select the filed (username field)
    // type in username file    // intarct with element
    cy.xpath("//input[@id='username']").type("test"); // using xpath
    //cy.get('#username').type("test")   // using css selector

    //   Enter the valid password
    // select password filed
    // type password filed    // intarct with element
    cy.xpath("//input[@id='password']").type("test"); // using xpath
    // cy.get('#password').type('test')   // using css

    // 3. Click on the "Login" button.
    // select login button
    // click on login button   // intarct with element
    cy.xpath("//button[@type='submit']").click(); // using xpath
    // cy.get('button').click()  // using css
    // 4. Assertion  comper Expected Result vs Actual result
    // if the Expected Result equal with Actual result
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/home/");
    // our test pass

    cy.get("h2").should("exist");
    cy.get("h2").should("be.visible");
    cy.get("h2").should("have.text", "Registered Users");

    cy.get("h2")
      .should("exist")
      .and("be.visible")
      .and("have.text", "Registered Users");
  });
});
