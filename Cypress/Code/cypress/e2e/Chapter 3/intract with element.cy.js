describe ('example for locater', () => {
    it('css locater', () =>
         {
            cy.visit('http://127.0.0.1:5500/project/form.html')

            // select element by id css locator and intract with it.

                // .type()
                  cy.get('#fname').type("Efrem")
                  cy.get('#lname').type("Yoahnis")
                  cy.get('#phone').type("0900000000")
                  cy.get('input#fname').type("Efrem")
                  cy.get('#email').type("Efrem@craft.com")
                  cy.get('#password').type('1234567')

                // .clear()
                  //cy.get('input#fname').clear()

                  cy.get('#Male').check()

                // select Option
                  cy.get('#CountryS').select('Ethiopia')
                  
                // check and uncheck 
                  cy.get('#javaC').check()
                  cy.get('#PythonC').uncheck()
                  cy.get('#Cpp').uncheck()
                  cy.get('#JavaScriptC').check()
                // .type()
                cy.get('#CommintTextarea').type("This is interacting with DOM element")
                // .click()
                cy.get('#button').click()


        })
})
 