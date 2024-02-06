class LoginPage {
    
    username(username) {
      cy.get('#username').type(username);
    }
  
    Password(password) {
      cy.get('#password').type(password);
    }
  
    submit() {
        cy.get('button').click();
    }
  }
  
export default new LoginPage();
