const page = require('./page')

function loginToApp () {
    //
    let signInButton = $('input[value=Login]');
    let username = $('input[name=userName]')
    var myButton = $('#myButton')
    //myButton.click()
  };

  function navigateToApp(url) {
    page.open(url);
  
  }
  
  module.exports = {
    loginToApp: loginToApp,
    navigateToApp:navigateToApp
}