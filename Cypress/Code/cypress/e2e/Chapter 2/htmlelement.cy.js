describe('html element', ()=>{
    it.only('th',()=>{
        cy.visit('https://html-element-for-testing.onrender.com/index.html')
        // cy.get(':nth-child(1) > .card > .card-body > h1').should('have.text','This is h1 element')
        cy.get('#text').then((e)=>{
            const t = e.text()
            expect(t).to.contains('This is QA calss at Craft')
        })
        
    })
})