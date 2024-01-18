describe('Testing Registration functinalty',()=>{
    it('Verify that the system validates the first name input correctly.',()=>{
         //1. visit
        cy.visit('https://end-to-end-v1.onrender.com/registration/')
        // 2. select element and 3. intract with element
        cy.get('#first_name').type('1234@34')
        cy.get('#last_name').type('efrem')
        cy.get('#username').type('testnewuser')
        cy.get('#email').type('example@gamil.com')
        cy.get('#phone').type('12345678')
        cy.get('#date_of_birth').type('2022-01-01')
        cy.get('#address').type('ayat')
        cy.get('#password1').type('test')
        cy.get('#confirm-password').type('test')
        cy.get('#role').select('User')
        cy.get(':nth-child(12) > input').click()
        
        // 4. assertion
        cy.xpath("//li[@class='my-list li']").should('have.text',' First name should only contain letters')
        cy.url().should('include','https://end-to-end-v1.onrender.com/registration/')
    
    
    })

    it('Verify that the system validates the last name input correctly.',()=>{
        //1. visit
       cy.visit('https://end-to-end-v1.onrender.com/registration/')
       // 2. select element and 3. intract with element
       cy.get('#first_name').type('efrem')
       cy.get('#last_name').type('12321@@##$')
       cy.get('#username').type('testnewuser')
       cy.get('#email').type('example@gamil.com')
       cy.get('#phone').type('12345678')
       cy.get('#date_of_birth').type('2022-01-01')
       cy.get('#address').type('ayat')
       cy.get('#password1').type('test')
       cy.get('#confirm-password').type('test')
       cy.get('#role').select('User')
       cy.get(':nth-child(12) > input').click()
       
       // 4. assertion
       cy.xpath("//li[@class='my-list li']").should('have.text',' Last name should only contain letters')
       cy.url().should('include','https://end-to-end-v1.onrender.com/registration/')
   
   })

   it('Verify that the system validates the username input correctly.',()=>{
    cy.visit('https://end-to-end-v1.onrender.com/registration/')
    cy.get('#first_name').type('efrem')
       cy.get('#last_name').type('jhon')
       cy.get('#username').type('1234@#@ ')
       cy.get('#email').type('example@gamil.com')
       cy.get('#phone').type('12345678')
       cy.get('#date_of_birth').type('2022-01-01')
       cy.get('#address').type('ayat')
       cy.get('#password1').type('test')
       cy.get('#confirm-password').type('test')
       cy.get('#role').select('User')
       cy.get(':nth-child(12) > input').click()
       
       // 4. assertion
       cy.xpath("//li[@class='my-list li']").should('have.text',' Last name should only contain letters')
       cy.url().should('include','https://end-to-end-v1.onrender.com/registration/')
   
   })
})