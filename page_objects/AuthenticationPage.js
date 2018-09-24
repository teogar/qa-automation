const actions = require('../base/actions');

/**
*@description Page Object for Authentication/Create a User
*/
function AuthenticationPage() {
  //Web Elements for Validate empty fields and Create a User
  //Personal Info Web Elements
  this.errorMessage = 'Invalid email address';
  this.createAnAccountButton = element(by.css('#SubmitCreate'));
  this.invalidEmailAddressAlert = element(by.css('#create_account_error>ol>li'))
  this.emailCreateAccountField = element(by.css('.is_required validate account_input form-control'));
  this.radioButtonMr = element(by.id('uniform-id_gender1'));
  this.customerFirstNameField = element(by.css('.customer_firstname'));
  this.customerLastNameField = element(by.css('.customer_lastname'));
  this.customerPasswordField = element(by.css('.passwd'));
  this.dayOfBirthFoldDownMenu = element(by.css('.days'));
  this.monthOfBirthFoldDownMenu = element(by.css('.months'));
  this.yearofBirthFoldDownMenu = element(by.css('.years'));
  this.newsLetterCheckBox = element(by.css('.newsletter'));
  //Your Address Web Elements
  //this.addressFirstName = element(by.xpath('//input[@id='firstname']'));
  //this.addressLastNameField = element(by.xpath('//input[@id='lastname']'));
  this.addressCompanyField = element(by.css('.company'));
  this.addressField = element(by.css('.address1'));
  this.addressLineTwoField = element(by.css('#address2'));
  this.addressCityField = element(by.css('.city'))
  this.stateSelectorHover = element(by.css('#uniform-id_state'));
  this.zipCodeField = element(by.css('.postcode'));
  this.countrySelectorHover = element(by.css('.id_country'));
  this.additionalInfoField = element(by.css('#other'));
  this.homePhoneField = element(by.css('.phone'));
  this.mobilePhoenButton = element(by.css('.phone_mobile'));
  this.addressAliadField = element(by.css('.alias'));
  this.resgisterButton = element(by.xpath('//span[contains(text(), "Register")]'));

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
}
module.exports = new AuthenticationPage();
