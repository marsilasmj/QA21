describe("select menu verifiction",()=>{
    it('using impe',()=>{
        cy.visit("https://html-element-for-testing.onrender.com/Auto_Complete.html")
        cy.get('#autocomplete-input').type("ap")
        cy.get('#autocomplete-list > li')
        .and('contain','Apple')
        .should('have.length','1')
    })
})