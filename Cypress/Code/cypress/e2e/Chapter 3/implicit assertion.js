
describe ('implicit assertion', () => {
    it('using should', () =>
         {

            cy.visit('http://127.0.0.1:5500/project/form.html')

             // 1. positave assertion

            cy.url().should('include','project')
            cy.url().should('contain','127')
            cy.url().should('eq','http://127.0.0.1:5500/project/form.html')

            cy.url()

             // 2. Short form of should()
          
           cy.url().should('include','project')
           .should('contain','project')
           .should('eq','http://127.0.0.1:5500/project/form.html')

             // 3. should with and
              
           cy.url().should('include','project')
           .and('contain','project')
           .and('eq','http://127.0.0.1:5500/project/form.html')
             
           // 4. negative assertion
                
           cy.url().should('not.include','prsdject')
           .and('not.contain','prsdfoject')
           .and('not.eq','http://127.0.0.1:5500/psdroject/form.html')
           
           // 5. checking visiblity and existance
             
           cy.get('h1.text-center').should('be.visible')
           .and('exist')
           cy.get('#button').should('be.visible')
           .and('exist')
     
        })
})

