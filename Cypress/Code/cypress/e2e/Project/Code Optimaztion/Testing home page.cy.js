describe("Testing home page", () => {
  it("Redirects unauthenticated user to login page", () => {
    cy.visit("https://end-to-end-v1.onrender.com/home/");

    cy.contains("Log In").should("be.visible"); // Verify if the 'Log In' button is visible
    cy.contains("Username:").should("be.visible"); // Verify if the 'Username:' label is visible
    cy.contains("Password:").should("be.visible"); // Verify if the 'Password:' label is visible
    cy.contains("Create account").should("be.visible"); // Verify if the 'Create account' link is visible
  });
});

describe("Testing home page", () => {
  beforeEach("login before each test case", () => {
    cy.visit("https://end-to-end-v1.onrender.com/");
    cy.fixture("loginTestData").then((data) => {
      username = data.TestCase1.username;
      password = data.TestCase1.password;
    });
    cy.mylogin(username, password);
  });

  afterEach("logout after each test case", () => {
    cy.xpath("//a[normalize-space()='Log out']").click();
  });
  it("Verify that the home page displays a list of registered users with the correct columns.", () => {
    // Step 4: Access the home page URL
    cy.url().should("include", "/home");

    // Verify the table columns
    cy.get("table").should("be.visible");
    cy.get("th").should("have.length", 6);
    cy.contains("Username").should("be.visible");
    cy.contains("Email").should("be.visible");
    cy.contains("Role").should("be.visible");
    cy.contains("View").should("be.visible");
    cy.contains("Update").should("be.visible");
    cy.contains("Delete").should("be.visible");
  });

  it("Verify that clicking on the View link/button navigates to the user's detailed information page.", () => {
    //click on view button.
    cy.xpath("//tbody/tr[1]/td[4]/a[1]").click();

    cy.url().should(
      "include",
      "https://end-to-end-v1.onrender.com/view_detail/"
    );
  });

  it("Verify that clicking on the Update link/button navigates to the user's information update page.", () => {
    //click on view button.
    cy.xpath("//tbody/tr[1]/td[5]/a[1]").click();

    cy.url().should("include", "https://end-to-end-v1.onrender.com/update/");
  });

  it("Verify that clicking on the Delete link/button deletes the user from the system.", () => {
    //click on view button.
    cy.xpath("//tbody/tr[1]/td[6]/a[1]").click();

    cy.xpath("//div[@class='alert success']").should(
      "have.text",
      "User deleted successfully."
    );
  });


  it("Verify that clicking on the QA-Test-Tool link in the navigation menu refreshes the home page.",()=>{

    // click on QA-Test-Tool

    cy.xpath("//a[normalize-space()='QA-Test-Tool']").click()
    
    // assertion about the URL
    cy.url().should("eq","https://end-to-end-v1.onrender.com/home/")
  })

  it("Verify that clicking on the Log out link in the navigation menu logs the user out from the system.",()=>{

    // click on QA-Test-Tool

    cy.xpath("//a[normalize-space()='Log out']").click()
    
    // assertion about the URL
    cy.url().should("eq","https://end-to-end-v1.onrender.com/")
  })

  it("verify that the home page includes a footer section with copyright information and a link to the Craft Knowledge website.",()=>{

    // click on QA-Test-Tool

    cy.xpath("//a[@class='link-deco']").click()
    
    // assertion about the URL
    cy.url().should("eq","https://end-to-end-v1.onrender.com/")
  })

  
});
