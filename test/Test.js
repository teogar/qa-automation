const data = require('../test_data/data');
const page = require('../page_objects/page');
const homePage = require('../page_objects/homepage');


beforeAll(function () {
    page.openUrl()
});

describe('Sign Up Sign In Scenarios', function () {
//Test
it('Go to Page', function () {
  homePage.signInClick();
});
});
