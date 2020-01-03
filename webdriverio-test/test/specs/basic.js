const assert = require('assert')
const loginpage = require('../../pageobjects/loginpage')
const url='http://www.newtours.demoaut.com/';

describe('DemoAutTests', () => {
    it('Verify Login', async () => 
    {        
        loginpage.navigateToApp(url)
        loginpage.loginToApp()
        
    })    
})



