const data = require('../test_data/data');
const page = require('../page_objects/page');
const homePage = require('../page_objects/HomePage');
const authenticationPage = require('../page_objects/AuthenticationPage')

//WizeLine Final Project

beforeAll(function () {
    page.openUrl()
});

describe('Click on the Sign In Button', function() {
  it('Sign In click', function() {
    homePage.clickOnSignInButton();
    console.log('Sign In Button : Clicked');
  })

describe('Click on Create an Account Button', function() {
  it('Create an Account Button', function() {
      authenticationPage.clickOnCreateAnAccount();
      console.log('Account Button Clicked');
      browser.sleep(6000);
      console.log('Invalid Email Alert is : Prensent');
    })
  })

describe('Input A Valid Email', function() {
  it('First step to Create an Account', function() {
    console.log('Sending a Valid Email : Starting');
    authenticationPage.sendValidEmail();
    console.log('Valid Email : Sent')
    })
  })

describe('Fullfill the Personal Info Form', function () {
  it('Second step to Create an Account', function () {
    console.log('Fullfill The presonal Info Form : Initializing');
    authenticationPage.fillPersonalInfoBlock();
    })
  })

  describe('Fullfill the Address Perosnal Info Form', function () {
    it('Third Step to Create an Account', function (){
      console.log('Fullfill the Address Info : Starting');
      authenticationPage.fillTheAddressInfoBlock();
    })
  })

  describe('Login', function () {
    it('Final, Login to My Account', function () {
      authenticationPage.loginFunction();
      console.log('Finaly the Login');
    })
  })
})
