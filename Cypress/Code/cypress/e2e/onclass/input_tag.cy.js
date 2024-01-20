https://html-element-for-testing.onrender.com/Text_Box.html


describe("text verifiction",()=>{

    it('using impe',()=>{
        cy.visit("https://html-element-for-testing.onrender.com/Text_Box.html")
        cy.get('#first_name').type("craft").should("have.value","craft")
        cy.get('#email').type("qa@craft.et").should("have.value","qa@craft.et")
        cy.get('#password').type("test").should("have.value","test")
        cy.get('#age').type("12").should("have.value","12")
        cy.get('#Address').type("A.A").should("have.value","A.A")
    })
})