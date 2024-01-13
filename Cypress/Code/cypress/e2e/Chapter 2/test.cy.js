describe("end to end tesing", ()=>{

    it("Registration page functinality testing",()=>{
  
       // tests steps
       cy.visit("https://end-to-end.onrender.com/registration/")
      // cy.get("#first_name") // using id
      //cy.get(".form-element")  // using class 
      //cy.get("[name='first_name']") // using name
        cy.xpath("//input[@id='first_name']").type('efrem')  // using xpath
        cy.get('#last_name').type("Yohannis")
        cy.get('#username').type("cypress")
    })
  
  
  

      it.only("view func tesing",()=>{
        cy.visit("https://end-to-end.onrender.com/home/")
        cy.xpath("//tbody/tr[1]/td[4]").click()
       })
    
    })
  