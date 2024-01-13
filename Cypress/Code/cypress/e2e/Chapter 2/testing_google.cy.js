describe("Testing Google home page", ()=>{
                    
    it("Verify search functionality",()=>{
          
          //1. Open the Google homepage
              cy.visit("https://www.google.com")
                
              //   2. select or locate (find) search box
                       cy.get("#APjFqb").type("cypress tutorial")
                    //cy.get(".gLFyf")
                   // cy.get('[jsname = "yZiJbe"]')
        //   3. type in to search box

        //   4. select or locate Google Search button
                    // cy.get('.gNO89b')
                    // cy.get('[value="Google Search"]')
                    // cy.contains('Google Search')
                        cy.contains('Google ፍለጋ').click()
        //   5. click()

        //   6. assertion
        //      compere expect result (The search results page should be displayed with relevant results related to the entered query). with actual result
        //         if it is the same our test pass
           cy.url().should('include','cypress+tutorial')  
           //https://www.google.com/search?q=cypress+tutorial&sca_esv=596043816&source=hp&ei=jG-YZfrlM8ySvr0P-pyv2AI&iflsig=AO6bgOgAAAAAZZh9nK7vfbIf7061R7NybyVa9rWqui3z&udm=&ved=0ahUKEwj62_vgk8eDAxVMia8BHXrOCysQ4dUDCAo&oq=cypress+tutorial&gs_lp=Egdnd3Mtd2l6IhBjeXByZXNzIHR1dG9yaWFsMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTSP8MUABYmgZwAHgAkAEAmAHeBqAB3gaqAQM2LTG4AQzIAQD4AQE&sclient=gws-wiz
       })
       
    it("Verify sign-in/sign-up functionality", ()=>{
           
            //  1. open the goole page
                        // cy.visit("https://end-to-end.onrender.com/registration/")
                        // cy.get(".form-element").first()
                        // cy.get(".form-element").last()
                        // cy.get(".form-element").eq(1)
                        // //cy.get('.form-element').should('exist').find('select');
                        // //cy.get('.form-element').find('select');
                         
                        cy.visit("https://www.google.com")
                        cy.xpath("//textarea[@id='APjFqb']").type("cypress tutorial")
                        cy.xpath("//div[@class='FPdoLc lJ9FBc']//input[@name='btnK']").click()

             //  2. select or locate  sign-in option
            //  3. click on elemet
            //  4. Assertion 
            //       compere expect result with actual result
                 
        })
    it.only("using cypress",()=>{
        cy.visit("https://www.google.com")
        cy.get('#APjFqb').type("cypress tutorial")
        cy.get('.FPdoLc > center > .gNO89b').click()
    })
    

   })