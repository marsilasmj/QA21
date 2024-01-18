// // describe('explicity assertion',()=>{ 

// //     // Expected Value Vs Actual Value 
// //     // expect('Actual Value').to.be.equal('Expected Value')
// //    it('example 1',()=>{
// //        let name = 'Efrem'  
// //        expect(name).to.equal('Efrem')
// //    })

// //    it('expext example', () =>
// //    {
// //        // Expected Value Vs Actual Value 
// //        // expect('Actual Value').to.be.equal('Expected Value')
// //        // 1. strate forward example
// //        let name = 'Efrem'  
// //        expect(name).to.equal('Efrem')


// //        cy.visit('http://127.0.0.1:5500/project/form.html')
      
// //        cy.get('h1.text-center').then(($text)=>{
// //           expect($text).to.exist 
// //        })
      

// //        cy.url().then(url => {
// //           let myurl=url
// //           cy.log(myurl)
// //            expect(url).to.eq('http://127.0.0.1:5500/project/form.html');
// //          });

// //          cy.get('#button').then((mybtn)=>{
           
// //            expect(mybtn).to.be.visible
// //          })

         
//       //These commands return a chainable type, not primitive values like strings, 
//       // so assigning them to variables will require further action to 'extract' the string.
//       //In order to get the url string, you need to do
//       //cy.url().then(urlString => //do whatever)

//       cy.get('#fname').type('Efrem')
//       cy.get('#fname').then(($username)=>{
//            let value = $username.val();
//            cy.log(value)
//         //    expect('Efrem').to.equal(value)

//        //cy.get('#fname').invoke('value')
//       })
//   })

  

// })





// it('assert example', () =>{

//    // Expected Value Vs Actual Value 
//    // assert.equal('Actual Value','Expected Value')
//    assert
//    let name = 'Efrem'  
//    assert(name,'Efrem')


//    cy.visit('http://127.0.0.1:5500/project/form.html')
//    let asas= cy.get('h1.text-center')
//    //assert.to.exist(asas)
//    assert.isOk(asas)


//    cy.url().then(url => {
//        let myurl=url
//        cy.log(myurl)
//         assert.equal(url,'http://127.0.0.1:5500/project/form.html')
//         //assert.typeOf("user1", 'string')
//      });

//      cy.get('#button').then((mybtn)=>{
//        assert.isOk(mybtn)
//     })


//     it('assert Example',()=>{
//        // Expected Value Vs Actual Value 
//           // assert.equal('Actual Value','Expected Value')
//           assert
//           let name = 'Efrem'  
//           assert(name,'Efrem')
      
      
//           cy.visit('http://127.0.0.1:5500/project/form.html')
         
//           let asas= cy.get('h1.text-center')
//           //assert.to.exist(asas)
//           assert.isOk(asas)
      
//           cy.url().then(url => {
//              let myurl=url
//              cy.log(myurl)
//               assert.equal(url,'http://127.0.0.1:5500/project/form.html')
//               //assert.typeOf("user1", 'string')
//            });
      
//             cy.get('#button').then((mybtn)=>{
//                assert.isOk(mybtn)
//             })
      
      
//             cy.get('#fname').type('Efrem')
//             cy.get('#fname').then(($username)=>{
//                  let value = $username.val();
//                  cy.log(value)
//                  assert(value,'Efrem')
//             })
      
//       })
         


describe("explicity assertion", ()=>{
    it.only("expect method",()=>{
 
        // 1. Open the web browser and navigate to https://end-to-end-v1.onrender.com/.
              cy.visit("https://end-to-end-v1.onrender.com/")
         // 2. Enter the valid username and password combination into the login form.
             cy.get('#username').type("test")
             cy.get('#password').type("test")
         // 3. Click on the "Login" button.
                 cy.get('button').click()
         //4. Asserton Expect result vs Actual result
                 //cy.get('h2').should("have.text",'Registered Users')
            
             
          cy.url().then(($value)=>{
              const actul_url = $value; 
              expect(actul_url).to.equal("https://end-to-end-v1.onrender.com/home/")
        
          })

    //       var expect_text;
    //       cy.get('h2').then(($text)=>{

    //          expect_text = $text;
    //       })
    //       expect(actul_url).to.equal("https://end-to-end-v1.onrender.com/home/")
    //       expect(expect_text).to.equal("Registered Users")
        })
 
})
     


 





