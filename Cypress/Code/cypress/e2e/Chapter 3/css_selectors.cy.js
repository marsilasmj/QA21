describe("end-to-end css selector", () => {
  it("login page", () => {
    // visity login page
    cy.visit("end-to-end-v1.onrender.com/");

    // Element on login page

    cy.get("#username"); // username
    cy.get("#password"); // password
    cy.get("button"); // button
  });

  it("registration page", () => {
    // visity registration
    cy.visit("https://end-to-end-v1.onrender.com/registration/");

    // Element on registration

    cy.get("#first_name"); // First Name
    cy.get("#last_name"); // Last name
    cy.get("#username"); // username
    cy.get("#email"); // email
    cy.get("#phone"); // phone
    cy.get("#date_of_birth"); // dob
    cy.get("#address"); // address
    cy.get("#password1"); // password
    cy.get("#confirm-password"); // confirm passowrd
    cy.get("#role"); // Role
    cy.get(":nth-child(12) > input"); // button
  });

  it("home page", () => {
    // visity home page
    cy.visit("https://end-to-end-v1.onrender.com/home/");

    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();

    // Elementt on home page

    cy.get("ul > :nth-child(1) > a"); //
    cy.get(".login-btn > a"); // logout
    cy.get("h2"); // text on home page

    cy.get(":nth-child(1) > :nth-child(4) > .btn-view"); // view button
    cy.get(":nth-child(1) > :nth-child(5) > .btn-update"); // update button
    cy.get(":nth-child(1) > :nth-child(6) > .btn-delete"); // delete button

    cy.get("p"); // footer text
    cy.get(".link-deco"); // crafft link
  });

  it("view page", () => {
    // visit home page
    cy.visit("https://end-to-end-v1.onrender.com/home/");

    // login to home page

    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();

    // click on view button
    cy.get(":nth-child(1) > :nth-child(4) > .btn-view").click(); // view button

    // Elemenet on view page

    cy.get(":nth-child(2) > #username");
    cy.get(":nth-child(3) > #username");
    cy.get("#email");
    cy.get("#role");
    cy.get("#dob");
    cy.get("#address");
  });

  it("update page", () => {
    // visit home page
    cy.visit("https://end-to-end-v1.onrender.com/home/");

    // login to home page

    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();

    // click on update button
    cy.get(":nth-child(1) > :nth-child(5) > .btn-update").click(); // update button

    // Elemenet on update page
    cy.get(":nth-child(2) > #username");
    cy.get(":nth-child(3) > #username");
    cy.get("#email");
    cy.get("#phone");
    cy.get("#date_of_birth");
    cy.get("#address");
    cy.get("#role");
    cy.get(":nth-child(9) > input");
  });
});
