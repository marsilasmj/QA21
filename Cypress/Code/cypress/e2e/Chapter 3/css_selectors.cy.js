
describe ('example for locater', () => {


    //<input type="text" 
     //name="firstname" 
     //class="form-control" 
     //placeholder="Enter Your First Name"
     // id="fname"/>

it('css locater', ()=>{
     cy.visit("http://127.0.0.1:5500/project/form.html")   //step 1: visit the web page  //    URL
     cy.get("input#fname")    // by id
     cy.get("input.form-control")  // by class
     cy.get("input[name='firstname']")   // by name atrr
     cy.get("input.form-control[name='firstname']")   // by class and name atrr   // step 2 select 
})

it('css locater', () =>
  {
       cy.visit('http://127.0.0.1:5500/project/form.html')
       // select element by id class locator.
         cy.get('.form-control')
       // select element by id class locator.
         cy.get("[name='firstname']")
       // select element by id class locator and attribute.
         cy.get(".form-control[name='firstname']")
      // tag name is opptional for all case
        // select element by id css locator.
           cy.get('input#fname')
        // select element by id class locator.
           cy.get('input.form-control')
        // select element by id class locator.
           cy.get("input[name='firstname']")
        // select element by id class locator and attribute.
           cy.get("input.form-control[name='firstname']")               

 })
 
})
