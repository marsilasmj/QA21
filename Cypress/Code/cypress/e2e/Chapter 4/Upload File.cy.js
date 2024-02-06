describe('File Upload Test', () => {
    it('should upload a file', () => {

      //Document4.pdf
      cy.visit("https://html-element-for-testing.onrender.com/Upload_File.html")
      
      cy.xpath("//input[@id='formFile']").attachFile("Document4.pdf")

      //cy.xpath("//input[@id='formFile']").attachFile('example_file.txt')
      cy.xpath("//input[@id='submit']").click()
      cy.xpath("//span[@id='fileName']").should('be.visible')
      .and("contain",'Document4.pdf')
    });
  });