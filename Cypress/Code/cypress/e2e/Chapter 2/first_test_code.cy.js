// using arrow function and test suit and test case expalinetion

describe('Test Suite name', () => {
    it('Test case Name', () => {
      // Testp Steps
        
  })
  })

  // Example with nameless function.

  describe('Test Suite name', function (){
    it('Test case Name', function (){
      // Testp Steps
        
  })
  })



// Example using skiping describe block.

describe.skip('Test Suite name', function (){
  it('Test case Name', function (){
    // Testp Steps
     
})
})


// Example using skiping it block.

describe('Test Suite name', function (){
  it.skip('Test case Name', function (){
    // Testp Steps

})
})



describe.only('Test Suite name', function (){
    it('Test case Name', function (){
      // Testp Steps
  
  })
  })

  
  // Example using only in it block.

  describe('Test Suite name', function (){
    it.only('Test case Name', function (){
      // Testp Steps
  
  })
  })

  
// Example cypress Test Steps.


describe('Test Suite name', function (){
  it('Test case Name', function (){
    // Testp Steps
      // 1. Visiting page
      // 2. selecting (find) search box
      // 3. intracting with element for type on search box
      // 4. assertion.
})
})


describe('Google home page testing', () => {
    it('verifying search functionality working', () => {
      // Testp Step
  // 1. Visiting page
         cy.visit('https://www.google.com')
  // 2. selecting (find) search box
         cy.get('') // 
  // 3. intracting with element for type on search box.
          .type('cypress tutorial') // to type in search box
  // 4. selecting (find) goole search button
         cy.get('') 
  // 5. intracting with element (type, click)
          .click() // to click on button.
  // 4. assertion.
  cy.url().shuld('include','cypress tesing tutorial')
  })
  })