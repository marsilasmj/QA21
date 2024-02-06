class RegistrationPage {
    
    FirstName(firstName) {
      cy.get('#first_name').type(firstName);
    }
  
    LastName(lastName) {
      cy.get('#last_name').type(lastName);
    }
  
    Username(username) {
      cy.get('#username').type(username);
    }
  
    Email(email) {
      cy.get('#email').type(email);
    }
  
    Phone(phone) {
      cy.get('#phone').type(phone);
    }
  
    DateOfBirth(dateOfBirth) {
      cy.get('#date_of_birth').type(dateOfBirth);
    }
  
    Address(address) {
      cy.get('#address').type(address);
    }
  
    Password(password) {
      cy.get('#password1').type(password);
    }
  
    ConfirmPassword(confirmPassword) {
      cy.get('#confirm-password').type(confirmPassword);
    }
  
    selectRole(role) {
      cy.get('#role').select(role);
    }
  
    submit() {
      cy.get(':nth-child(12) > input').click();
    }
  
    
  }
  
export default new RegistrationPage();