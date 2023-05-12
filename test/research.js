const {Builder, By, Key, until } = require('selenium-webdriver');
// Diffrent asserts
const assert = require ('assert');
const should = require ('chai').should();
const expect = require('chai').expect;

// Mocha
describe('Erins recomandation', () =>{
    it('Successfully opened Erins recomandation', async () => {
        let driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://magento.softwaretestingboard.com/women/tops-women.html');

        
        await driver.wait(until.elementLocated(By.css('div.filter-options-title')), 10000);

        

        //await driver.wait(until.elementLocated(By.css('a[href$="/women/tops-women.html?erin_recommends=1"]')),10000);
        //await driver.findElement(By.css('a[href$="/women/tops-women.html?erin_recommends=1"]')).click();

        let items = await driver.findElements(By.css('div.filter-options-title'));
        let length= items.length;
        console.log(length);

        //let itemsText = JSON.stringify(items); 
        //console.log(itemsText);
        //await items.click();
        //await driver.sleep(50000);
        
        

    });
    it('This test should be pending');
});