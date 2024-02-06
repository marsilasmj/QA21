
describe("select menu verifiction",()=>{
    it('Select option Two',()=>{
        cy.visit("https://html-element-for-testing.onrender.com/Select_Menu.html")
        cy.get('#floatingSelect').select("Two").should("have.value","2")
    })
})