describe("end-to-end xpath selector", () => {
  it("login page", () => {
    // visit login page
    cy.visit("https://end-to-end-v1.onrender.com/");

    // Element on login page

    cy.xpath("//input[@id='username']");
    cy.xpath("//input[@id='password']");
    cy.xpath("//button[@type='submit']");
  });

  it("registration page", () => {
    // visit regstratio page
    cy.visit("https://end-to-end-v1.onrender.com/registration/");

    // Element on registration page
    cy.xpath("//input[@id='first_name']");
    cy.xpath("//input[@id='last_name']");
    cy.xpath("//input[@id='username']");
    cy.xpath("//input[@id='email']");
    cy.xpath("//input[@id='phone']");
    cy.xpath("//input[@id='date_of_birth']");
    cy.xpath("//textarea[@id='address']");
    cy.xpath("//input[@id='password1']");
    cy.xpath("//input[@id='confirm-password']");
    cy.xpath("//select[@id='role']");
  });

  it("home page", () => {
    // visit login page
    cy.visit("https://end-to-end-v1.onrender.com/");

    // Element on login page

    cy.xpath("//input[@id='username']").type("testuserq");
    cy.xpath("//input[@id='password']").type("user");
    cy.xpath("//button[@type='submit']").click();

    // Element on home page

    cy.xpath("//a[normalize-space()='QA-Test-Tool']");
    cy.xpath("//a[normalize-space()='Log out']");
    cy.xpath("//h2[normalize-space()='Registered Users']");

    cy.xpath("//th[normalize-space()='Username']");
    cy.xpath("//th[normalize-space()='Email']");
    cy.xpath("//th[normalize-space()='Role']");
    cy.xpath("//tbody/tr[1]/td[4]/a[1]");
    cy.xpath("//tbody/tr[1]/td[5]/a[1]");
    cy.xpath("//tbody/tr[1]/td[6]/a[1]");

    cy.xpath("//a[@class='link-deco']");
  });

  it("View page", () => {
    // visit login page
    cy.visit("https://end-to-end-v1.onrender.com/");

    // Element on login page

    cy.xpath("//input[@id='username']").type("testuserq");
    cy.xpath("//input[@id='password']").type("user");
    cy.xpath("//button[@type='submit']").click();

    // Element on home page and click on view option from table

    cy.xpath("//tbody/tr[1]/td[4]/a[1]").click();

    // Element on View Page

    cy.xpath("//div[1]//span[1]");
    cy.xpath("//div[2]//span[1]");
    cy.xpath("//span[@id='email']");
    cy.xpath("//span[@id='role']");
    cy.xpath("//span[@id='dob']");
    cy.xpath("//span[@id='address']");
  });

  it("Update page", () => {
    // visit login page
    cy.visit("https://end-to-end-v1.onrender.com/");

    // Element on login page

    cy.xpath("//input[@id='username']").type("testuserq");
    cy.xpath("//input[@id='password']").type("user");
    cy.xpath("//button[@type='submit']").click();

    // Element on home page and click on update option from table

    cy.xpath("//tbody/tr[1]/td[5]/a[1]").click();

    // Element on Update Page

    cy.xpath("//div[1]//input[1]");
    cy.xpath("//div[2]//input[1]");
    cy.xpath("//input[@id='email']");
    cy.xpath("//input[@id='phone']");
    cy.xpath("//input[@id='date_of_birth']");
    cy.xpath("//textarea[@id='address']");
    cy.xpath("//select[@id='role']");
  });
});
