

describe ('example for locater', () => {
    it('xpath locater', () =>
         {
              cy.visit('http://127.0.0.1:5500/project/form.html')
              // xpath exmaple
              cy.xpath("//div[@class='card-body']/div")
              // chained xpath example
               cy.xpath("//div[@class='card-body']").xpath("/div")
              // for text inpute 
              cy.xpath("//input[@id='fname']")

              cy.xpath("//input[@id='lname']")
        })
})
 