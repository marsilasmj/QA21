import 'cypress-iframe'
describe('Tutorialspoint Test', function () {
  
   it.only('Test Case6', function (){
       cy.visit("https://html-element-for-testing.onrender.com/Frames.html");
       cy.frameLoaded('#frame1')
       cy.iframe().find('input[type="text"]').type("Efrem").should("have.value","Efrem")
       cy.iframe().find('input[type="email"]').type("efrem@gail.com").should("have.value","efrem@gail.com")
       cy.iframe().find('input[type="password"]').type("123dew3").should("have.value","123dew3")
       cy.iframe().find('input[type="number"]').type("24").should("have.value","24")
       cy.iframe().find('textarea').type("this is address").should("have.value","this is address")
      
   });
});
