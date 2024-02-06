describe("Testing login functinalty ", () => {

  beforeEach("",()=>{
    cy.visit("https://end-to-end-v1.onrender.com/");
  })
  it("Verify that a user can successfully log in with valid credentials.", () => {
      
      // select and intract with element
      cy.fixture("loginTestData").then((data)=>{
        username = data.TestCase1.username
        password = data.TestCase1.password
        cy.mylogin(username,password)
      })
      // assertion about URL https://end-to-end-v1.onrender.com/home/.

      cy.url().should("eq", "https://end-to-end-v2.onrender.com/home/");
     
      // assertion about element on home page
      cy.get("h2").should("exist");
      cy.get("h2").should("be.visible");
      cy.get("h2").should("have.text", "Registered Users");
      cy.get("h2")
        .should("exist")
        .and("be.visible")
        .and("have.text", "Registered Users");
    });

  it("Verify that the system behaber with an invalid username and valid password.", () => {
    
       // select and intract with element
       cy.fixture("loginTestData").then((data)=>{
        username = data.TestCase2.username
        password = data.TestCase2.password
        cy.mylogin(username,password)
      })

      //assertion about error message stating "Invalid credentials"
      cy.xpath("//li[@class='error']").should("have.text","Invalid credentials")
      
      //assertion about URL https://end-to-end-v1.onrender.com/.
      cy.url().should("eq", "https://end-to-end-v2.onrender.com/");

    });

    it("Verify that the system handles invalid login credentials with an invalid password.", () => {
      
      // select and intract with element
      cy.fixture("loginTestData").then((data)=>{
        username = data.TestCase3.username
        password = data.TestCase3.password
        cy.mylogin(username,password)
      })
      //assertion about error message stating "Invalid credentials"
      cy.xpath("//li[@class='error']").should("have.text","Invalid credentials")
      
      //assertion about URL https://end-to-end-v1.onrender.com/.
      cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
    
    });

    it("Verify that the system handles invalid login credentials with both an invalid username and an invalid password.", () => {
     
      // visit page
       // select and intract with element
       cy.fixture("loginTestData").then((data)=>{
        username = data.TestCase4.username
        password = data.TestCase4.password
        cy.mylogin(username,password)
      })
      //assertion about error message stating "Invalid credentials"
      cy.xpath("//li[@class='error']").should("have.text","Invalid credentials")
    
      //assertion about URL https://end-to-end-v1.onrender.com/.
      cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
 
    });

});
