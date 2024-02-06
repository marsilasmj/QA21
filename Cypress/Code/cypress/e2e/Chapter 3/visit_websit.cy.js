describe('visit_command',()=>{
   
      //1. open google
      it('visit_google',()=>{    
       cy.visit('http://www.google.com');
     });
     
     //2. open craft websit
     it('open craft websit',()=>{
      cy.visit('https://craftknowledge.net/');
     })
    
    //  //3. open local project
     it('open local project',()=>{
      cy.visit('http://127.0.0.1:5500/project1/form.html');
     })
  
    //4. baseURL concept
     it('baseURL concept ',()=>{
      cy.visit('home');
     })
  
    //  //5. Changeing BaseURL While Testing
      it.only('Changeing BaseURL While Testing', { baseUrl: 'http://127.0.0.1:5500/project1/'}, () => {
      cy.visit('/form.html')
      
     })
     it.only('end-to-end',()=>{
      cy.visit("https://end-to-end-v1.onrender.com/");
     })
     
  
    })
  