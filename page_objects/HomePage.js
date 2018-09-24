const actions = require('../base/actions');

/**
*@description Page Object for Sign In Page
*/
function HomePage() {
  //Web Elements to Click Sign In Button
  this.signInButton = element(by.xpath('//a[contains(text(), "Sign in")]'));

/**
*@description Function to Click on the Sign In Button
*/
  this.clickOnSignInButton = () => {
    actions.getElementText(this.signInButton);
    actions.clickToElement(this.signInButton);
    browser.sleep(6000);
  };
}
module.exports = new HomePage();
