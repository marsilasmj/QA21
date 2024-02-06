describe('template spec', () => {
    it('normalAlert', () => {
       cy.visit('https://html-element-for-testing.onrender.com/Alert.html')
         
         // click on button 
       cy.get('#normalAlert').click()

        cy.on('window:alert', (t) => {
            // assertion1  on message
        expect(t).to.contains('This is Normal alert')
        })
           // assertion 2 on result
        cy.get('#result').should("have.text",'Normal Alert')
    
       })
   
    it.only('confirmAlert', () => {
        // visit website
       cy.visit('https://html-element-for-testing.onrender.com/Alert.html')
       
        // click on option
       cy.get('#CofirmAlert').click()
       
       cy.on('window:confirm', (text) => {
            expect(text).to.contains('Are you sure you want to proceed?')
        })
        cy.get('#result').should("have.text","Ok Clicked")

        // To click cancle() 
        cy.on('window:confirm',()=>true)
        cy.get('#result').should('have.text', 'Ok Clicked')
   
       })
    it('promptAlert', () => {
       cy.visit('https://html-element-for-testing.onrender.com/Alert.html')
       cy.window().then((win) => {
           cy.stub(win, 'prompt').returns('Craft');
       })
       cy.get('#promtAlert').click()
       cy.get('#result').should('have.text', 'Craft');
   })
   
   })


   