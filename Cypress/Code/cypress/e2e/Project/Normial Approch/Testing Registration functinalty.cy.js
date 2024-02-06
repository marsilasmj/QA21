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
        cy.xpath("//li[@class='my-list li']").should('have.text','First name should only contain letters')
        cy.url().should('eq','https://end-to-end-v1.onrender.com/registration/')
    
    
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
       cy.xpath("//li[@class='my-list li']").should('have.text','Last name should only contain letters')
       cy.url().should('eq','https://end-to-end-v1.onrender.com/registration/')
   
   })

   it('Verify that the system validates the username input correctly.',()=>{
      // visit web site
    cy.visit('https://end-to-end-v1.onrender.com/registration/')
      // select and intract with element
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
       cy.xpath("//li[@class='my-list li']").should('have.text','Username should only contain letters')
       cy.url().should('eq','https://end-to-end-v1.onrender.com/registration/')
   
   })

   it("Verify that the system validates the phone number input correctly.",()=>{
      // visit web site
      cy.visit('https://end-to-end-v1.onrender.com/registration/')
      // select and intract with element
    cy.get('#first_name').type('efrem')
       cy.get('#last_name').type('jhon')
       cy.get('#username').type('newuser')
       cy.get('#email').type('example@gamil.com')
       cy.get('#phone').type('123')
       cy.get('#date_of_birth').type('2022-01-01')
       cy.get('#address').type('ayat')
       cy.get('#password1').type('test')
       cy.get('#confirm-password').type('test')
       cy.get('#role').select('User')
       cy.get(':nth-child(12) > input').click()
       
       // 4. assertion
       cy.xpath("//li[@class='my-list li']").should('have.text','Phone number should be in the format +1234567890')
       cy.url().should('eq','https://end-to-end-v1.onrender.com/registration/')
   
   })


   it("Verify that the system validates the Invalid Date of Birth",()=>{
    // visit web site
    cy.visit('https://end-to-end-v1.onrender.com/registration/')
    // select and intract with element
     cy.get('#first_name').type('efrem')
     cy.get('#last_name').type('jhon')
     cy.get('#username').type('newuser')
     cy.get('#email').type('newexample@gamil.com')
     cy.get('#phone').type('+1233232323')
     cy.get('#date_of_birth').type('2022-01-01')
     cy.get('#address').type('ayat')
     cy.get('#password1').type('test')
     cy.get('#confirm-password').type('test')
     cy.get('#role').select('User')
     cy.get(':nth-child(12) > input').click()
     
     // 4. assertion
     cy.xpath("//li[@class='my-list li']").should('have.text','Age must be above 20 years.')
     cy.url().should('eq','https://end-to-end-v1.onrender.com/registration/')
 
 })
      
 it("Verify that the system checks for the uniqueness of the entered username",()=>{
  // visit web site
  cy.visit('https://end-to-end-v1.onrender.com/registration/')
  // select and intract with element
   cy.get('#first_name').type('efrem')
   cy.get('#last_name').type('jhon')
   cy.get('#username').type('test')
   cy.get('#email').type('example@gamil.com')
   cy.get('#phone').type('+1233232323')
   cy.get('#date_of_birth').type('1990-01-01')
   cy.get('#address').type('ayat')
   cy.get('#password1').type('test')
   cy.get('#confirm-password').type('test')
   cy.get('#role').select('User')
   cy.get(':nth-child(12) > input').click()
   
   // 4. assertion
   cy.xpath("//li[@class='my-list li']").should('have.text','Username already exists')
   cy.url().should('eq','https://end-to-end-v1.onrender.com/registration/')

})
  

it("Verify that the system checks for the uniqueness of the email address.",()=>{
  // visit web site
  cy.visit('https://end-to-end-v1.onrender.com/registration/')
  // select and intract with element
   cy.get('#first_name').type('efrem')
   cy.get('#last_name').type('jhon')
   cy.get('#username').type('newtestdata')
   cy.get('#email').type('efremyohanis116@gamil.com')
   cy.get('#phone').type('+1233232323')
   cy.get('#date_of_birth').type('1990-01-01')
   cy.get('#address').type('ayat')
   cy.get('#password1').type('test')
   cy.get('#confirm-password').type('test')
   cy.get('#role').select('User')
   cy.get(':nth-child(12) > input').click()
   
   // 4. assertion
   cy.xpath("//li[@class='my-list li']").should('have.text','Email already exists')
   cy.url().should('eq','https://end-to-end-v1.onrender.com/registration/')

})
 
it("Description: Verify that the system validates the password inputs correctly.",()=>{
  // visit web site
  cy.visit('https://end-to-end-v1.onrender.com/registration/')
  // select and intract with element
   cy.get('#first_name').type('efrem')
   cy.get('#last_name').type('jhon')
   cy.get('#username').type('newtestdata')
   cy.get('#email').type('newemail@gamil.com')
   cy.get('#phone').type('+1233232323')
   cy.get('#date_of_birth').type('1990-01-01')
   cy.get('#address').type('ayat')
   cy.get('#password1').type('test')
   cy.get('#confirm-password').type('testnew')
   cy.get('#role').select('User')
   cy.get(':nth-child(12) > input').click()
   
   // 4. assertion
   cy.xpath("//li[@class='my-list li']").should('have.text','Passwords do not match')
   cy.url().should('eq','https://end-to-end-v1.onrender.com/registration/')

})

it("Verify that the Link with name login is persent on registration and redirect to login page",()=>{
 
  // visit web site
  cy.visit('https://end-to-end-v1.onrender.com/registration/')
  // select and intract with element
   cy.xpath("//a[@class='account']").should("have.text","Login")
   
   cy.xpath("//a[@class='account']").click()
   
   // 4. assertion
   cy.url().should('eq','https://end-to-end-v1.onrender.com/')
   
  
})

it("Verify that the system successfully creates a new user account when all input validations pass.",()=>{
  // visit web site
  cy.visit('https://end-to-end-v1.onrender.com/registration/')
  // select and intract with element
   cy.get('#first_name').type('new')
   cy.get('#last_name').type('jhon')
   cy.get('#username').type('newuser')
   cy.get('#email').type('newemail1@gamil.com')
   cy.get('#phone').type('+1233232323')
   cy.get('#date_of_birth').type('1990-01-01')
   cy.get('#address').type('ayat')
   cy.get('#password1').type('test')
   cy.get('#confirm-password').type('test')
   cy.get('#role').select('User')
   cy.get(':nth-child(12) > input').click()
   
   // 4. assertion
   cy.url().should('eq','https://end-to-end-v1.onrender.com/')
   //cy.xpath("//li[@class='my-list li']").should('have.text','Passwords do not match')
  
})


})