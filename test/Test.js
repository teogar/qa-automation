const data = require('../test_data/data');
const page = require('../page_objects/page');
const homePage = require('../page_objects/HomePage');
const authenticationPage = require('../page_objects/AuthenticationPage')


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
})
