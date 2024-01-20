
describe("radio butto",()=>{

    it('using impe',()=>{
        cy.visit("https://html-element-for-testing.onrender.com/Radio_button.html")
        cy.get('#thirdradio').check().should("be.checked")
        cy.get('#firstradio').should("not.be.checked")
        cy.get('#secondradio').should("not.be.checked")
        
        
    })
})