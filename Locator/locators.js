const Locators = function () {
  /**
  *@description Constants for the Locators
  *
  */
  ERROR_MESSAGE = 'Invalid email address';
  CREATE_ACCOUNT_BUTTON = '#SubmitCreate';
  INVALID_EMAIL_ALERT = '#create_account_error>ol>li';
  EMAIL_CREATE_ACCOUNT_FIELD = '#email_create';
  RADIO_BUTTON_MR = 'uniform-id_gender1';
  CUSTOMER_FIRSTNAME_FIELD = '#customer_firstname';
  CUSTOMER_LASTNAME_FIELD = '#customer_lastname';
  CUTOMER_PASSWORD_FILED = '#passwd';
  DAY_OF_BIRTH_MENU = 'days';
  MOTH_OF_BIRTH_MENU = 'months';
  YEAR_OF_ BIRTH_MENU = 'years';
  NEW_LETTER_CHECKBOX = '#newsletter';
  ADDRESS_FIRST_NAME = "//input[@id='firstname']";
  ADDRESS_LAST_NAME = "//input[@id='lastname']";
  ADDRESS_COMPANY_FIELD = '#company';
  ADDRESS_FIELD = '#address1';
  ADDRESS_FILD_2 = '#address2';
  ADDRESS_CITY_FIELD = '#city';
  STATE_SELECTRO_HOVER = '#id_state';
  ZIP_CODE_FIELD = '#postcode';
  COUNTRY_SELECTOR_HOVER = '#id_country';
  ADDITIONAL_INFO_FIELD = '#other';
  HOME_PHINE_FIELD = '#phone';
  MOBILE_PHONE_FILED = '#phone_mobile';
  ADDRESS_ALIAS_FIELD = '#alias';
  REGISTRATION_BUTTON = '//span[contains(text(), "Register")]';
  SIGNOUT_BUTTON = "//a[@title='Log me out']";
  EMAIL_LOGIN_FIELD = '#email';
  PASSWORD_LOGIN_FIELD = '#passwd';
  SUBMIT_LOGIN_BUTTON = 'SubmitLogin';
  WELCOME_TO _YOUR_ACCOUNT = "//p[@class='info-account']";
}
module.exports = new Locators();
