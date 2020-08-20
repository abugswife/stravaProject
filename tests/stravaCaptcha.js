//Testing Captcha Chance
module.exports = {
    'Log into system - create order': function (browser) {
      var currentIteration = 0,
          iterationCount = 10;

      function runTest() {
        browser
          .url('https://www.strava.com/login')
          .click('#email')
          .setValue('#email', 'davisdbrianna@gmail.com')
          .click('#password')
          .setValue('#password', 'bdenisem0')
          .click('#login-button')
          browser.perform(function() {
            if (++currentIteration < iterationCount) {
              return runTest();
            }

            browser.end(); // After passing 10 iterations end the session
          });
      }

      runTest();
    }
  };