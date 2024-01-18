describe('',()=>{
    
    it('static dropdown ', function (){
        // launch URL
    cy.visit("http://127.0.0.1:5500/project1/form.html");
        // locate select element 
    cy.get('#CountryS').select('Ethiopia').then(($sel)=>{
        const val = $sel.val()
        expect('Ethiopia').to.eq(val)
     })
 })

})