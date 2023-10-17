const { expect, browser, $ , $$} = require('@wdio/globals')
const { it } = require('mocha')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await browser.url(`https://the-internet.herokuapp.com/login`)

//         await $('#username').setValue('tomsmith')
//         await $('#password').setValue('SuperSecretPassword!')
//         await $('button[type="submit"]').click()

//         await expect($('#flash')).toBeExisting()
//         await expect($('#flash')).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

//TASK 1

describe("Test suite - task 1", () => {
    it("first test", async () =>{
        await browser.url("https://es.wikipedia.org/wiki/Wikipedia:Portada");
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("Wikipedia, la enciclopedia libre")
    })

    it("Second test", async () =>{
        const path = await $('//*[@id="Portales"]')
        expect(await path.getText()).toEqual('Portales')
    })

    it("Third test", async () =>{
        const path = $('//*[@id="Recurso_del_día"]/a')
        expect(await path.getAttribute('href')).toHaveHref('/wiki/Wikipedia:Recurso_del_d%C3%ADa')
    })
 
    it("Fourth test", async () =>{ 
        const image = $('//*[@id="main-tfa"]/p[1]/a[1]')
        expect(await image.waitForDisplayed()).toBeClickable()
        
    })
    it("Fifth test", async () =>{ 
        const image = $('#main-tfa > figure > a > img')
        expect(await image.getAttribute('class')).toContain('mw-file-element')
    })
})

//TASK 2

describe("Test suite - task 2", () => {
    it("first test", async () =>{
        await browser.url("https://www.casadellibro.com.co/");
        const layout = await $('#__layout')
        expect(await layout.isExisting()).toEqual(true)
    })
    it("second test", async () =>{
        const main = await $('.v-main')
        expect(await main.isDisplayed()).toEqual(true)
    })
    it("third test", async () =>{
        const input = await $('//*[@id="app"]/div[1]/div[1]/div[2]/div[2]/div/input')
        expect(await input.setValue('James Clear'))
        await browser.pause(5000)
    })
    it("fourth test", async () =>{
        const bag = await $('//*[@id="app"]/div[1]/div[1]/div[2]/div[1]/button[2]')
        await bag.waitForDisplayed({
            timeout: 3000,
            interval: 50
        })   
    })
    it("fifth test", async () =>{
        const div = await $('#onetrust-accept-btn-handler')
        await browser.waitUntil(async () => {
          return await div.click();
        }, {
          timeout: 10000,
          timeoutMsg: 'Expected div to disappear within 10s'
        });
      await div.click()
     })
//     it("r", async () =>{
//         const text = await $('//*[@id="app"]/div[1]/main/div/div/div/div[16]/div')
//         //*[@id="app"]/div[1]/main/div/div/div/div[16]/div/div[1]
//         //*[@id="app"]/div[1]/main/div/div/div/div[16]/div/div[1]/h2
//         const div = await (await text.$$('div')[1].$('h2')).isExisting()
//         expect(div).toEqual(false)
      
//     })
})

// TASK 3




