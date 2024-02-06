describe("Mouse Event testing",()=>{
    it("Normal Click testing",()=>{
       cy.visit("https://html-element-for-testing.onrender.com/Mouse_Event.html")
       cy.get('#normalClick').click()
       cy.get("#result").should('have.text','Normal Clicked')
       
    })
    
    it.only("Double Click Testing",()=>{
        cy.visit("https://html-element-for-testing.onrender.com/Mouse_Event.html")
        cy.get('#doubleClick').dblclick()
        cy.get("#result").should('have.text','dblclick Clicked')
    })
    it("Mouse Over Testing",()=>{
        cy.visit("https://html-element-for-testing.onrender.com/Mouse_Event.html")
        cy.get('#mouseOver').trigger('mouseover');
        cy.get("#result").should('have.text','mouseover')

    })
    it("Right Click Testing",()=>{
        cy.visit("https://html-element-for-testing.onrender.com/Mouse_Event.html")
        cy.get('#RightClick').trigger('contextmenu')
        cy.get("#result").should('have.text','Right Click')
    })
})