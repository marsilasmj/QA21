describe('Test suite 1',()=>{
    it('test case 1', function(){
        // Test steps
         cy.log("this is test 1")
    })

    it('test case 2',()=>{
        // Test steps
        cy.log("this is test 2")
    })

    it('test case 3',()=>{
        // Test steps
        cy.log("this is test 3")
    })

    it('test case 4',()=>{
        // Test steps
        cy.log("this is test 4")
    })

    
})


describe('Test suit 2',function(){

     it('test case name', function(){
         // Test steps
         cy.log("this is test 1")
     })
})

describe('Check the Login Functionality for Gmail', ()=>{
      
    it('Check system behavior when valid email id and password is entered.',()=>{
        //Test steps 
           // visity gmail website
           // enter email   
           // enter password
           // click login button
       })
    it('Check system behavior when invalid email and valid password is entered.',()=>{
       //Test steps
           // visity gmail website
           // enter email   
           // enter password
           // click login button
       })
    it('Check system behavior when valid email and invalid password is entered.',()=>{
       //Test steps
            // visity gmail website
           // enter email   
           // enter password
           // click login button
      })
   it('Check system behavior when invalid email id and invalid password is entered.',()=>{
       //Test steps
            // visity end to end website website
            cy.visit("https://end-to-end.onrender.com/")
            cy.get('#username').type("test")
            cy.get("#password").type("test")
            cy.get('button').click()
            
            cy.url().should('eq','https://end-to-end.onrender.com/home/')
           // enter email   
           // enter password
           // click login button
       })
})


