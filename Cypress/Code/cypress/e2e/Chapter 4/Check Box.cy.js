describe( 'Checkbox Tests',  () => {
   it('should check and uncheck a checkbox', function(){
    cy.visit("https://html-element-for-testing.onrender.com/Check_Box.html" )
    cy.get('#gridCheck1').check();
    cy.get('#gridCheck2').should('be.checked')
    cy.get('#gridCheck3').uncheck();
    cy.get('#gridCheck4').should('be.checked')
   })
    
    it('should check multiple checkboxes' , function (){
        cy.visit("https://html-element-for-testing.onrender.com/Check_Box.html" )
        cy.get('.form-check-input').check({ multiple: true });
        cy.get('.form-check-input').each(($checkbox)=>{
            cy.wrap($checkbox).should('be.checked')
        })
    })
})



