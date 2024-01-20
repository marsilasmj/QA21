describe('new tab hadlign', () => {
    it('removing target', () => {
        cy.visit('https://html-element-for-testing.onrender.com/New_Tab.html')
        cy.get('#newTab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://html-element-for-testing.onrender.com/sample.html')
        cy.get('h3').should('exist')
        cy.go('back') 
    })
})