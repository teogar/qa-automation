const actions = require('../base/actions');

/**
*@description Page Object for Sign In Page
*/
function SignInPage() {
  //Web Elements to Click Sign In Button
  this.signInButton = element(by.id('login'));

/**
*@description Funtions to Click on the Sign In Button
*/
  this.signInClick () {
    this.signInButton.click();

  };
}
module.export = new HomePage();
