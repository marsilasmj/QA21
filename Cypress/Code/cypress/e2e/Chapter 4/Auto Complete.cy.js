describe("auto com verifiction",()=>{
    it('using ',()=>{
        cy.visit("https://html-element-for-testing.onrender.com/Auto_Complete.html")
        cy.xpath("//input[@id='autocomplete-input']").type("a")
        cy.xpath("//li[normalize-space()='Apple']")
        .should("contain","Apple")
        .and("have.length","1")
    })
})