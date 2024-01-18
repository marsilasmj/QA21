import 'cypress-iframe'
describe('Tutorialspoint Test', function () {
  
   it.only('Test Case6', function (){
      cy.visit("https://html-element-for-testing.onrender.com/Frames.html");
      cy.frameLoaded('iframe')
    //    cy.iframe().contains("Topic 1").then(function(t){
    //       const frmtxt = t.text()
    //       expect(frmtxt).to.contains('Topic 1');
        
    //    })
   });
});
