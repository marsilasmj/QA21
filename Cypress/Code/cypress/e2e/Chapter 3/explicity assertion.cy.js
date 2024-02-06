describe("explicity assertion", () => {
    it("Using expect", () => {
      // visity home page
      cy.visit("https://end-to-end-v1.onrender.com/");
  
      cy.get("#username").type("testuserq");
      cy.get("#password").type("test");
      cy.get("button").click();
  
      // 1. positave assertion on URL
  
      cy.url().then((actual_url)=>{
        expect(actual_url).to.equal("https://end-to-end-v1.onrender.com/home/")
      })
    });

    it("Using assert", () => {
        // visity home page
        cy.visit("https://end-to-end-v1.onrender.com/");
    
        cy.get("#username").type("testuserq");
        cy.get("#password").type("test");
        cy.get("button").click();
    
        // 1. positave assertion on URL
    
        cy.url().then((actual_url)=>{

            assert.equal(actual_url, "https://end-to-end-v1.onrender.com/home/");
        
        })
      });
  });
  