describe('template spec', () => {
    it('normalAlert', () => {
        cy.visit('https://html-element-for-testing.onrender.com/Alert.html')
        cy.get('#normalAlert').click()
        
         cy.on('window:alert', (t) => {
            expect(t).to.contains('This is Normal alert')
         })
        cy.get('#result').should('have.text', 'Normal Alert')

     })

    it('confirmAlert', () => {
        cy.visit('https://html-element-for-testing.onrender.com/Alert.html')
        cy.get('#CofirmAlert').click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('Are you sure you want to proceed?')
        })
        //  ok clicked
        // cy.on('window:confirm', () => true)
        // cy.get('#result').should('have.text', 'Ok Clicked')

        // cancel click
        cy.on('window:confirm', () => false)
        cy.get('#result').should('have.text', 'Cancel Clicked')

     })
    it('promptAlert', () => {
        cy.visit('https://html-element-for-testing.onrender.com/Alert.html')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Wellcom');
        })
        cy.get('#promtAlert').click()
        cy.get('#result').should('have.text', 'Wellcom');
 })

})