
describe("select menu verifiction",()=>{
    it('using impe',()=>{
        cy.visit("https://html-element-for-testing.onrender.com/Select_Menu.html")
        cy.get('#floatingSelect').select("Two").should("have.value","2")
    })
})