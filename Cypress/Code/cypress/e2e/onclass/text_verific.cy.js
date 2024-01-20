describe("text verifiction",()=>{

    it('using impe',()=>{
        cy.visit("https://html-element-for-testing.onrender.com/index.html")
         // using xpath
        //cy.xpath("//h1[@id='text']") 
        // using css
        cy.get('#text').should("exist")
        .and("be.visible")
        .and("have.text","This is QA Class at Craft")
    })
})