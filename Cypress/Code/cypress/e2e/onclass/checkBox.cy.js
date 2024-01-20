
describe("text verifiction",()=>{

    it('using impe',()=>{
        cy.visit("https://html-element-for-testing.onrender.com/Check_Box.html")
        cy.get('#gridCheck1').check().should("be.checked")
        cy.get('#gridCheck2').uncheck().should("not.be.checked")
        cy.get('#gridCheck3').uncheck().should("not.be.checked")
        cy.get('#gridCheck4').uncheck().should("not.be.checked")
    })
})