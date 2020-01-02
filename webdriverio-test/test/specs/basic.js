const assert = require('assert')

describe('WebdriverIO-HomepageTest', () => {
    it('Verify valid title', async () => {
        //allureReporter.addFeature('Feature')
        await browser.url('https://webdriver.io')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })    
})

describe('WebdriverIO-HomepageTest1', () => {
    it('Verify valid title', async () => {
        //allureReporter.addFeature('Feature')
        await browser.url('https://webdriver.io')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.jss')
    })    
})



