import LoginPage from "./pageObjects/LoginPage";
import RegistrationPage from "./pageObjects/Registration"



Cypress.Commands.add('mylogin',(username,password)=>{
  LoginPage.username(username)
  LoginPage.Password(password)
  LoginPage.submit()
})


Cypress.Commands.add("myRegistration",(fname,lname,username,email,phone,dob,address,password1,password2,Role
  )=>{

    RegistrationPage.FirstName(fname)
    RegistrationPage.LastName(lname)
    RegistrationPage.Username(username)
    RegistrationPage.Email(email)
    RegistrationPage.Phone(phone)
    RegistrationPage.DateOfBirth(dob)
    RegistrationPage.Address(address)
    RegistrationPage.Password(password1)
    RegistrationPage.ConfirmPassword(password2)
    RegistrationPage.selectRole(Role)
    RegistrationPage.submit(Role)
  
})



