describe("Testing Registration functinalty", () => {
  it("Verify that the system validates the first name input correctly.", () => {
    //1. visit
    cy.visit("https://end-to-end-v1.onrender.com/registration/");
    cy.fixture("registrationTestData").then((data) => {

      test_data = data.TestCase1;
      // 2. select element and 3. intract with element
      cy.myRegistration(
        test_data.firstName,
        test_data.lastName,
        test_data.username,
        test_data.email,
        test_data.phoneNumber,
        test_data.dateOfBirth,
        test_data.address,
        test_data.password,
        test_data.confirmPassword,
        test_data.role,
      );
    });

    // 4. assertion
    cy.xpath("//li[@class='my-list li']").should(
      "have.text",
      "First name should only contain letters"
    );
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/registration/");
  });

  it("Verify that the system validates the last name input correctly.", () => {
    //1. visit
    cy.visit("https://end-to-end-v1.onrender.com/registration/");
    // 2. select element and 3. intract with element
    cy.fixture("registrationTestData").then((data) => {

      test_data = data.TestCase2;
      // 2. select element and 3. intract with element
      cy.myRegistration(
        test_data.firstName,
        test_data.lastName,
        test_data.username,
        test_data.email,
        test_data.phoneNumber,
        test_data.dateOfBirth,
        test_data.address,
        test_data.password,
        test_data.confirmPassword,
        test_data.role,
      );
    });
    // 4. assertion
    cy.xpath("//li[@class='my-list li']").should(
      "have.text",
      "Last name should only contain letters"
    );
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/registration/");
  });

  it("Verify that the system validates the username input correctly.", () => {
    // visit web site
    cy.visit("https://end-to-end-v1.onrender.com/registration/");
    // select and intract with element
    cy.fixture("registrationTestData").then((data) => {

      test_data = data.TestCase3;
      // 2. select element and 3. intract with element
      cy.myRegistration(
        test_data.firstName,
        test_data.lastName,
        test_data.username,
        test_data.email,
        test_data.phoneNumber,
        test_data.dateOfBirth,
        test_data.address,
        test_data.password,
        test_data.confirmPassword,
        test_data.role,
      );
    });
    // 4. assertion
    cy.xpath("//li[@class='my-list li']").should(
      "have.text",
      "Username should only contain letters"
    );
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/registration/");
  });

  it("Verify that the system validates the phone number input correctly.", () => {
    // visit web site
    cy.visit("https://end-to-end-v1.onrender.com/registration/");
    // select and intract with element
    cy.fixture("registrationTestData").then((data) => {

      test_data = data.TestCase4;
      // 2. select element and 3. intract with element
      cy.myRegistration(
        test_data.firstName,
        test_data.lastName,
        test_data.username,
        test_data.email,
        test_data.phoneNumber,
        test_data.dateOfBirth,
        test_data.address,
        test_data.password,
        test_data.confirmPassword,
        test_data.role,
      );
    });
    // 4. assertion
    cy.xpath("//li[@class='my-list li']").should(
      "have.text",
      "Phone number should be in the format +1234567890"
    );
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/registration/");
  });

  it("Verify that the system validates the Invalid Date of Birth", () => {
    // visit web site
    cy.visit("https://end-to-end-v1.onrender.com/registration/");
    // select and intract with element
    cy.fixture("registrationTestData").then((data) => {

      test_data = data.TestCase5;
      // 2. select element and 3. intract with element
      cy.myRegistration(
        test_data.firstName,
        test_data.lastName,
        test_data.username,
        test_data.email,
        test_data.phoneNumber,
        test_data.dateOfBirth,
        test_data.address,
        test_data.password,
        test_data.confirmPassword,
        test_data.role,
      );
    });
    // 4. assertion
    cy.xpath("//li[@class='my-list li']").should(
      "have.text",
      "Age must be above 20 years."
    );
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/registration/");
  });

  it("Verify that the system checks for the uniqueness of the entered username", () => {
    // visit web site
    cy.visit("https://end-to-end-v1.onrender.com/registration/");
    // select and intract with element
    cy.fixture("registrationTestData").then((data) => {

      test_data = data.TestCase6;
      // 2. select element and 3. intract with element
      cy.myRegistration(
        test_data.firstName,
        test_data.lastName,
        test_data.username,
        test_data.email,
        test_data.phoneNumber,
        test_data.dateOfBirth,
        test_data.address,
        test_data.password,
        test_data.confirmPassword,
        test_data.role,
      );
    });
    // 4. assertion
    cy.xpath("//li[@class='my-list li']").should(
      "have.text",
      "Username already exists"
    );
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/registration/");
  });

  it("Verify that the system checks for the uniqueness of the email address.", () => {
    // visit web site
    cy.visit("https://end-to-end-v1.onrender.com/registration/");
    // select and intract with element
    cy.fixture("registrationTestData").then((data) => {

      test_data = data.TestCase7;
      // 2. select element and 3. intract with element
      cy.myRegistration(
        test_data.firstName,
        test_data.lastName,
        test_data.username,
        test_data.email,
        test_data.phoneNumber,
        test_data.dateOfBirth,
        test_data.address,
        test_data.password,
        test_data.confirmPassword,
        test_data.role,
      );
    });
    // 4. assertion
    cy.xpath("//li[@class='my-list li']").should(
      "have.text",
      "Email already exists"
    );
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/registration/");
  });

  it("Description: Verify that the system validates the password inputs correctly.", () => {
    // visit web site
    cy.visit("https://end-to-end-v1.onrender.com/registration/");
    // select and intract with element
    cy.fixture("registrationTestData").then((data) => {

      test_data = data.TestCase8;
      // 2. select element and 3. intract with element
      cy.myRegistration(
        test_data.firstName,
        test_data.lastName,
        test_data.username,
        test_data.email,
        test_data.phoneNumber,
        test_data.dateOfBirth,
        test_data.address,
        test_data.password,
        test_data.confirmPassword,
        test_data.role,
      );
    });
    // 4. assertion
    cy.xpath("//li[@class='my-list li']").should(
      "have.text",
      "Passwords do not match"
    );
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/registration/");
  });

  it("Verify that the system successfully creates a new user account when all input validations pass.", () => {
    // visit web site
    cy.visit("https://end-to-end-v1.onrender.com/registration/");
    // select and intract with element
    cy.fixture("registrationTestData").then((data) => {

      test_data = data.TestCase8;
      // 2. select element and 3. intract with element
      cy.myRegistration(
        test_data.firstName,
        test_data.lastName,
        test_data.username,
        test_data.email,
        test_data.phoneNumber,
        test_data.dateOfBirth,
        test_data.address,
        test_data.password,
        test_data.confirmPassword,
        test_data.role,
      );
    });
    // 4. assertion
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
    //cy.xpath("//li[@class='my-list li']").should('have.text','Passwords do not match')
  });

  it("Verify that the Link with name login is persent on registration and redirect to login page", () => {
    // visit web site
    cy.visit("https://end-to-end-v1.onrender.com/registration/");
    // select and intract with element
    cy.xpath("//a[@class='account']").should("have.text", "Login");

    cy.xpath("//a[@class='account']").click();

    // 4. assertion
    cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
  });
});
