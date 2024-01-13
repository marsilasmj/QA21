describe("login fun testing",()=>{


    beforeEach(()=>{
        cy.fixture('data3').then((data)=>{
            cy.visit("https://end-to-end.onrender.com/")
            cy.get("#username").type(data.username)
            cy.get("#password").type(data.password)
            cy.get("[type='submit']").click()
        })
    })

    it("testing loing with correct username and passworrd",()=>{
        // test stpes
        cy.url().should("eq","https://end-to-end.onrender.com/home/")

    })
})