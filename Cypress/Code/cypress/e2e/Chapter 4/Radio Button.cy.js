describe('Radio Button Tests', () => {

    it('should select a radio button', () => {
        cy.visit('https://html-element-for-testing.onrender.com/Radio_button.html');
        cy.get('.form-check-input').first().check();
        cy.get('.form-check-input').first().should('be.checked');
    });

    it('should verify only one radio button can be selected at a time', () => {
        cy.visit('https://html-element-for-testing.onrender.com/Radio_button.html');
        cy.get('.form-check-input').eq(0).check();
        cy.get('.form-check-input').eq(0).should('be.checked');

        cy.get('.form-check-input').eq(1).check();
        cy.get('.form-check-input').eq(0).should('not.be.checked');
        cy.get('.form-check-input').eq(1).should('be.checked');

        cy.get('.form-check-input').eq(2).check();
        cy.get('.form-check-input').eq(1).should('not.be.checked');
        cy.get('.form-check-input').eq(2).should('be.checked');
    });
});