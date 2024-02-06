describe("end-to-end css selector", () => {
  it("login page", () => {
    // visit login page
    cy.visit("https://end-to-end-v1.onrender.com/");

    // intract with login element
    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();
  });

  it("registration page", () => {
    // visity registration
    cy.visit("https://end-to-end-v1.onrender.com/registration/");

    // Intract with Element on registration

    cy.get("#first_name").type("FirstName"); // First Name
    cy.get("#last_name").type("LatName"); // Last name
    cy.get("#username").type("Username"); // username
    cy.get("#email").type("Email@Craft.com"); // email
    cy.get("#phone").type("+251700004554"); // phone
    cy.get("#date_of_birth").type("2000-01-01"); // dob
    cy.get("#address").type("Addis Ababa, Ethipoia"); // address
    cy.get("#password1").type("Password"); // password
    cy.get("#confirm-password").type("Password"); // confirm passowrd
    cy.get("#role").select("User"); // Role
    cy.get(":nth-child(12) > input").click(); // button
  });

  it("home page", () => {
    // visit login page
    cy.visit("https://end-to-end-v1.onrender.com/");

    // intract with login element
    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();

    // Element on home page and intract with it
    cy.get("ul > :nth-child(1) > a").click(); //

    cy.get(".login-btn > a").click(); // logout  button

    cy.get(":nth-child(1) > :nth-child(4) > .btn-view").click(); // view button
    cy.get(":nth-child(1) > :nth-child(5) > .btn-update").click(); // update button
    cy.get(":nth-child(1) > :nth-child(6) > .btn-delete").click(); // delete button

    cy.get(".link-deco").click(); // crafft link
  });

  it("View page", () => {
    // visit home page
    cy.visit("https://end-to-end-v1.onrender.com/home/");

    // login to home page

    cy.get("#username").type("testuserq");
    cy.get("#password").type("test");
    cy.get("button").click();

    // click on update button
    cy.get(":nth-child(1) > :nth-child(4) > .btn-view").click(); // update button

    // Element on home page and intract with it
    cy.get("ul > :nth-child(1) > a").click(); //

    cy.get(".login-btn > a").click(); // logout  button

    cy.get(".link-deco").click(); // crafft link
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

    // intract with Elemenet on update page

    cy.get(":nth-child(2) > #username").type("NewFirstName");
    cy.get(":nth-child(3) > #username").type("NewLasttName");
    cy.get("#email").type("NewEmail@Craft.com");
    cy.get("#phone").type("+2519000000");
    cy.get("#date_of_birth").type("2000-02-02");
    cy.get("#address").type("NewAddress");
    cy.get("#role").select("User");
    cy.get(":nth-child(9) > input").click();
  });
});
