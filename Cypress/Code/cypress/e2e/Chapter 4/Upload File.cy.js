describe('File Upload Test', () => {
    it('should upload a file', () => {
      const file = 'example_file.txt'
      cy.visit('https://html-element-for-testing.onrender.com/Upload_File.html');
      cy.get('#formFile').attachFile(file)
      cy.get('#submit').click();
      cy.get('#fileName').should('have.text', 'example_file.txt');
     
    });
  });