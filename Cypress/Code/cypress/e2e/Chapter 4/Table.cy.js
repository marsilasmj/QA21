describe('Table Test', () => {
    it('Check the existence of the table on the page.', () => {
      cy.visit("https://html-element-for-testing.onrender.com/Table.html")
      cy.get('#table')
      .should('exist')
      .and('be.visible')
    });

    it('Check the length of col', () => {
       cy.visit("https://html-element-for-testing.onrender.com/Table.html")
       cy.get("#table-head ").find('th').should('have.length', '4');
       
      
     });
  
     it('Check the length of row', () => {
        cy.visit("https://html-element-for-testing.onrender.com/Table.html")
        cy.get("#table-body").find('tr').should("have.length", 5)
       
      });
   
      it('Check the name of each col', () => {
        cy.visit("https://html-element-for-testing.onrender.com/Table.html")
        cy.get("#table-head ").find('th').eq(0).should("have.text","#")
        cy.get("#table-head ").find('th').eq(1).should("have.text","Name")
        cy.get("#table-head ").find('th').eq(2).should("have.text","Position")
        cy.get("#table-head ").find('th').eq(3).should("have.text","Age")
       
      });
   
    it.only('should display the correct data in the table', () => {
      cy.visit("https://html-element-for-testing.onrender.com/Table.html")
      cy.get('#table-body tr').eq(0).find('td').eq(0).should('have.text', '1');
      cy.get('#table-body tr').eq(0).find('td').eq(1).should('have.text', 'Brandon Jacob');
      cy.get('#table-body tr').eq(0).find('td').eq(2).should('have.text', 'Designer');
      cy.get('#table-body tr').eq(0).find('td').eq(3).should('have.text', '28');
      
    });

})