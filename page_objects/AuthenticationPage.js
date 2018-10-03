const actions = require('../base/actions');
const data = require('../test_data/data')

/**
*@description Page Object for Authentication/Create a User
*/
function AuthenticationPage() {
  //Web Elements for Validate empty fields and Create a User
  //Personal Info Web Elements
  this.errorMessage = 'Invalid email address';
  this.createAnAccountButton = element(by.css('#SubmitCreate'));
  this.invalidEmailAddressAlert = element(by.css('#create_account_error>ol>li'))
  this.emailCreateAccountField = element(by.css('#email_create'));
  this.radioButtonMr = element(by.id('uniform-id_gender1'));
  this.customerFirstNameField = element(by.css('#customer_firstname'));
  this.customerLastNameField = element(by.css('#customer_lastname'));
  this.customerPasswordField = element(by.css('#passwd'));
  this.dayOfBirthFoldDownMenu = element(by.id('days'));
  this.monthOfBirthFoldDownMenu = element(by.id('months'));
  this.yearofBirthFoldDownMenu = element(by.id('years'));
  this.newsLetterCheckBox = element(by.css('#newsletter'));
  //Your Address Info Web Elements
  this.addressFirstName = element(by.xpath("//input[@id='firstname']"));
  this.addressLastNameField = element(by.xpath("//input[@id='lastname']"));
  this.addressCompanyField = element(by.css('#company'));
  this.addressField = element(by.css('#address1'));
  this.addressLineTwoField = element(by.css('#address2'));
  this.addressCityField = element(by.css('#city'))
  this.stateSelectorHover = element(by.css('#id_state'));
  this.zipCodeField = element(by.css('#postcode'));
  this.countrySelectorHover = element(by.css('#id_country'));
  this.additionalInfoField = element(by.css('#other'));
  this.homePhoneField = element(by.css('#phone'));
  this.mobilePhoenButton = element(by.css('#phone_mobile'));
  this.addressAliadField = element(by.css('#alias'));
  this.resgisterButton = element(by.xpath('//span[contains(text(), "Register")]'));
  this.signOutButton = element(by.xpath("//a[@title='Log me out']"));
  //Login WebElements
  this.emailLogin = element(by.css('#email'));
  this.passwordLogin = element(by.css('#passwd'));
  this.submitLogin = element(by.id('SubmitLogin'));
  this.welcomeToAccount = element(by.xpath("//p[@class='info-account']"));

  /**
  *@description Function Used for Validate a Empty field
  *No Email Input
  */
  this.clickOnCreateAnAccount = () => {
    actions.isElementDisplayed(this.createAnAccountButton);
    actions.clickToElement(this.createAnAccountButton);
    browser.sleep(3000);
    return actions.getElementText(this.invalidEmailAddressAlert);
    expect(this.invalidEmailAddressAlert().toEqual(this.errorMessage));
  };

/**
*@description Function used to enter a Valid Email Address to
*start the Account Creation
*/
  this.sendValidEmail = () => {
    actions.isElementDisplayed(this.emailCreateAccountField);
    this.emailCreateAccountField.clear();
    actions.enterText(this.emailCreateAccountField, email);
    browser.sleep(3000);
    actions.clickToElement(this.createAnAccountButton);
    browser.sleep(2000);
  };

/**
*@description function to Fill the Personal Info Block
*
*/
  this.fillPersonalInfoBlock = () => {
    actions.isElementDisplayed(this.radioButtonMr);
    actions.clickToElement(this.radioButtonMr);
    console.log('Mr. Radio Button : Clicked');
    browser.sleep(1000);
    this.customerFirstNameField.clear();
    actions.enterText(this.customerFirstNameField, name);
    console.log('Fist Name : Sent');
    this.customerLastNameField.clear();
    actions.enterText(this.customerLastNameField, lastname);
    console.log('Last Name : Sent');
    this.customerPasswordField.clear();
    actions.enterText(this.customerPasswordField, password);
    console.log('Password : Sent');
    this.dayOfBirthFoldDownMenu.sendKeys(dayofbirth);
    this.monthOfBirthFoldDownMenu.sendKeys(monthofbirth);
    this.yearofBirthFoldDownMenu.sendKeys(yearofbirth);
    this.newsLetterCheckBox.click();
    browser.sleep(2000);
  };

  /**
  *@description function to fullfill the Address Information
  *
  */
  this.fillTheAddressInfoBlock = () => {
    this.addressFirstName.clear();
    actions.enterText(this.addressFirstName, addressfirstname);
    console.log('Sending Address First : Start ');
    this.addressLastNameField.clear();
    actions.enterText(this.addressLastNameField, addresslastname);
    console.log('Sending Address Last Name : Start');
    this.addressCompanyField.clear();
    actions.enterText(this.addressCompanyField, addresscompanyfield);
    console.log('Sending Address Company Name : Start');
    this.addressField.clear();
    actions.enterText(this.addressField, addressfield);
    console.log('Sending Address : Start');
    this.addressCityField.clear();
    actions.enterText(this.addressCityField, addresscityfield);
    console.log('Choosing City : Start');
    browser.sleep(2000);
    this.stateSelectorHover.sendKeys(addressstatefield);
    console.log('Selecting State : Start');
    this.zipCodeField.clear();
    actions.enterText(this.zipCodeField, zipcode);
    this.additionalInfoField.clear();
    actions.enterText(this.additionalInfoField, addinfo);
    this.homePhoneField.clear();
    actions.enterText(this.homePhoneField, homephone);
    this.mobilePhoenButton.clear();
    actions.enterText(this.mobilePhoenButton, mobilephone);
    this.addressAliadField.clear();
    actions.enterText(this.addressAliadField, alias);
    actions.clickToElement(this.resgisterButton);
    browser.sleep(2000);
    actions.clickToElement(this.signOutButton);
    browser.sleep(5000);
  }
  /**
  *@description Function to login
  *
  */
  this.loginFunction = () => {
    this.emailLogin.clear();
    actions.enterText(this.emailLogin, emaillogin);
    console.log('Entering Login email : Sent');
    this.passwordLogin.clear();
    actions.enterText(this.passwordLogin, passwordlogin);
    console.log('Entering Pâssword to login : Sent');
    actions.clickToElement(this.submitLogin);
    console.log('Submit Button : CLicked');
    browser.sleep(3000);
    actions.isElementDisplayed(this.welcomeToAccount);
    actions.getElementText(this.welcomeToAccount);
    console.log('Welcome to your account. Here you can manage all of your personal information and orders');
    browser.sleep(5000);
  }
}
module.exports = new AuthenticationPage();
