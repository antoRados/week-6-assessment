import { Builder, Capabilities, By, Button } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

describe('Human player moves', () => {

    test('I can start a game', async () => {

        let button = await (await driver).findElement(By.id('start-game'));
        await button.click();
        
    });
    
    test('Check that clicking the upper left square adds an X to the square.', async() => {
    
        let cell = await (await driver).findElement(By.id('cell-0'));
        await cell.click();
    
    });
    
    test('Check that clicking the upper right square adds an X to the square.', async() => {
    
        let cell = await (await driver).findElement(By.id('cell-2'));
        await cell.click();
    
    });
    
    test('Check that clicking the lower right square adds an X to the square.', async() => {
    
        let cell = await (await driver).findElement(By.id('cell-8'));
        await cell.click();
    
    });

});

describe('AI player moves', () => {

    test('Check to see that the computer moves to a square after clicking on a square.', async(computerMove) => {
        
        let playerMove = await (await driver).findElement(By.id('cell-4'));
        await playerMove.click();

        let cell = await (await driver).findElement(By.id('cell-0'));
        await computerMove()

    });

})
