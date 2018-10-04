const actions = require('../base/actions');
const data = require('../test_data/data');
const locators = require('../Locator/locators');


/**
*@description Page Object for Authentication/Create a User
*/
function AuthenticationPage() {
  //Web Elements for Validate empty fields and Create a User
  //Personal Info Web Elements
  this.errorMessage = ERROR_MESSAGE;
  this.createAnAccountButton = element(by.css(CREATE_ACCOUNT_BUTTON));
  this.invalidEmailAddressAlert = element(by.css(INVALID_EMAIL_ALERT))
  this.emailCreateAccountField = element(by.css(EMAIL_CREATE_ACCOUNT_FIELD));
  this.radioButtonMr = element(by.id(RADIO_BUTTON_MR));
  this.customerFirstNameField = element(by.css(USTOMER_FIRSTNAME_FIELD));
  this.customerLastNameField = element(by.css(CUSTOMER_LASTNAME_FIELD ));
  this.customerPasswordField = element(by.css(CUTOMER_PASSWORD_FILED));
  this.dayOfBirthFoldDownMenu = element(by.id(DAY_OF_BIRTH_MENU));
  this.monthOfBirthFoldDownMenu = element(by.id(MOTH_OF_BIRTH_MENU));
  this.yearofBirthFoldDownMenu = element(by.id(YEAR_OF_ BIRTH_MENU));
  this.newsLetterCheckBox = element(by.css(NEW_LETTER_CHECKBOX));
  //Your Address Info Web Elements
  this.addressFirstName = element(by.xpath(ADDRESS_FIRST_NAME));
  this.addressLastNameField = element(by.xpath(ADDRESS_LAST_NAME));
  this.addressCompanyField = element(by.css(ADDRESS_COMPANY_FIELD));
  this.addressField = element(by.css(ADDRESS_FIELD));
  this.addressLineTwoField = element(by.css(ADDRESS_FILD_2));
  this.addressCityField = element(by.css(ADDRESS_CITY_FIELD));
  this.stateSelectorHover = element(by.css(STATE_SELECTRO_HOVER));
  this.zipCodeField = element(by.css(ZIP_CODE_FIELD));
  this.countrySelectorHover = element(by.css(COUNTRY_SELECTOR_HOVER));
  this.additionalInfoField = element(by.css(ADDITIONAL_INFO_FIELD));
  this.homePhoneField = element(by.css(HOME_PHINE_FIELD));
  this.mobilePhoenButton = element(by.css(MOBILE_PHONE_FILED));
  this.addressAliadField = element(by.css(ADDRESS_ALIAS_FIELD));
  this.resgisterButton = element(by.xpath(REGISTRATION_BUTTON));
  this.signOutButton = element(by.xpath(SIGNOUT_BUTTON));
  //Login WebElements
  this.emailLogin = element(by.css(EMAIL_LOGIN_FIELD));
  this.passwordLogin = element(by.css(PASSWORD_LOGIN_FIELD));
  this.submitLogin = element(by.id(SUBMIT_LOGIN_BUTTON));
  this.welcomeToAccount = element(by.xpath(WELCOME_TO _YOUR_ACCOUNT));

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
    console.log('Sending Zip Code : Starting');
    this.additionalInfoField.clear();
    actions.enterText(this.additionalInfoField, addinfo);
    console.log('Sending Additional Info : Starting');
    this.homePhoneField.clear();
    actions.enterText(this.homePhoneField, homephone);
    console.log('Sending Home Phone Number : Starting');
    this.mobilePhoenButton.clear();
    actions.enterText(this.mobilePhoenButton, mobilephone);
    console.log('Sending Mobile Phone Number : Starting');
    this.addressAliadField.clear();
    actions.enterText(this.addressAliadField, alias);
    console.log('Sending Address Alias : Starting');
    actions.clickToElement(this.resgisterButton);
    console.log('Clcik to Submit Button : Clicked');
    browser.sleep(2000);
    actions.clickToElement(this.signOutButton);
    console.log('Clcik to Signout Button : Clicked and Signed Out');
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
