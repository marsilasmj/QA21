describe("Testing login functinalty",()=>{
it("Verify that a user can successfully log in with valid credentials.",()=>{
    // 1. Open the web browser and navigate to https://end-to-end-v1.onrender.com/.
          cy.visit("https://end-to-end-v1.onrender.com/")
    // 2. Enter the valid username and password combination into the login form.
        cy.get('#username').type("test")
        cy.get('#password').type("test")
    // 3. Click on the "Login" button.
         cy.get('button').click()
    //4. Asserton Expect result vs Actual result
         cy.get('h2').should("have.text",'Registered Users')
       // Expect Result :-The system should redirect the user to the 'home' page using the URL https://end-to-end-v1.onrender.com/home/.
}) 

// it()

// it()


// it()
})