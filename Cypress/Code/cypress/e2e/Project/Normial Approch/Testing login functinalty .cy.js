describe("Testing login functinalty ", () => {

  it("Verify that a user can successfully log in with valid credentials.", () => {
      // visit page
      cy.visit("https://end-to-end-v1.onrender.com/");
     
      // select and intract with element
      cy.xpath("//input[@id='username']").type("testuserone"); 
      cy.xpath("//input[@id='password']").type("test"); 
      cy.xpath("//button[@type='submit']").click(); 
      
      // assertion about URL https://end-to-end-v1.onrender.com/home/.

      cy.url().should("eq", "https://end-to-end-v1.onrender.com/home/");
     
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
     
      // visit page
      cy.visit("https://end-to-end-v1.onrender.com/");
     
      // select and intract with element
      cy.xpath("//input[@id='username']").type("invalidusername"); 
      cy.xpath("//input[@id='password']").type("test"); 
      cy.xpath("//button[@type='submit']").click(); 

      //assertion about error message stating "Invalid credentials"
      cy.xpath("//li[@class='error']").should("have.text","Invalid credentials")
      
      //assertion about URL https://end-to-end-v1.onrender.com/.
      cy.url().should("eq", "https://end-to-end-v1.onrender.com/");

    });

    it("Verify that the system handles invalid login credentials with an invalid password.", () => {
      
      // visit page
      cy.visit("https://end-to-end-v1.onrender.com/");
     
      // select and intract with element
      cy.xpath("//input[@id='username']").type("test"); 
      cy.xpath("//input[@id='password']").type("invalidpassword"); 
      cy.xpath("//button[@type='submit']").click(); 

      //assertion about error message stating "Invalid credentials"
      cy.xpath("//li[@class='error']").should("have.text","Invalid credentials")
      
      //assertion about URL https://end-to-end-v1.onrender.com/.
      cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
    
    });

    it("Verify that the system handles invalid login credentials with both an invalid username and an invalid password.", () => {
     
      // visit page
      cy.visit("https://end-to-end-v1.onrender.com/");
     
      // select and intract with element
      cy.xpath("//input[@id='username']").type("invalidusername"); 
      cy.xpath("//input[@id='password']").type("invalidpassword"); 
      cy.xpath("//button[@type='submit']").click(); 

      //assertion about error message stating "Invalid credentials"
      cy.xpath("//li[@class='error']").should("have.text","Invalid credentials")
    
      //assertion about URL https://end-to-end-v1.onrender.com/.
      cy.url().should("eq", "https://end-to-end-v1.onrender.com/");
 
    });

});
