describe( 'Text Box Tests',  () => {
    
    it('should enter text into a text input field' , function (){
        cy.visit("https://html-element-for-testing.onrender.com/Text_Box.html" )
        cy.get('#first_name').type('example name');
        cy.get('#first_name').should('have.value', 'example name');
    });

    it('should enter an email into an email input field' , function (){
        cy.visit("https://html-element-for-testing.onrender.com/Text_Box.html" )
        cy.get('#email').type('example@example.com');
        cy.get('#email').should('have.value', 'example@example.com');
    });
    it('should enter a password into a password input field' , function (){
        cy.visit("https://html-element-for-testing.onrender.com/Text_Box.html" )
        cy.get('#password').type('secretpassword');
        cy.get('#password').should('have.value', 'secretpassword');
    });
    it('should enter a number into a number input field' , function (){
        cy.visit("https://html-element-for-testing.onrender.com/Text_Box.html" )
        cy.get('#age').type('42');
        cy.get('#age').should('have.value', '42');
    });
    it('should enter text into a textarea' , function (){
        cy.visit("https://html-element-for-testing.onrender.com/Text_Box.html" )
        cy.get('#Address').type('This is a textarea.');
        cy.get('#Address').should('have.value', 'This is a textarea.');
    });
    

})