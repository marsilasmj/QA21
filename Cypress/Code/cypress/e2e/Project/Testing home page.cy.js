describe('Testing home page', () => {
    it('Redirects unauthenticated user to login page', () => {
      cy.visit('https://end-to-end-v1.onrender.com/home/');
  
      cy.contains('Log In').should('be.visible'); // Verify if the 'Log In' button is visible
      cy.contains('Username:').should('be.visible'); // Verify if the 'Username:' label is visible
      cy.contains('Password:').should('be.visible'); // Verify if the 'Password:' label is visible
      cy.contains('Create account').should('be.visible'); // Verify if the 'Create account' link is visible
    });

    it('Verify that the home page displays a list of registered users with the correct columns.', () => {
        // Step 1: Open the web browser and navigate to the URL
        cy.visit('https://end-to-end-v1.onrender.com/');
    
        // Step 2: Enter valid username and password
        cy.get('#username').type('test');
        cy.get('#password').type('test');
    
        // Step 3: Click on the "Login" button
        cy.contains('Log In').click();
    
        // Step 4: Access the home page URL
        cy.url().should('include', '/home');
    
        // Verify the table columns
        cy.get('table').should('be.visible');
        cy.get('th').should('have.length', 6);
        cy.contains('Username').should('be.visible');
        cy.contains('Email').should('be.visible');
        cy.contains('Role').should('be.visible');
        cy.contains('View').should('be.visible');
        cy.contains('Update').should('be.visible');
        cy.contains('Delete').should('be.visible');
    });

 });
