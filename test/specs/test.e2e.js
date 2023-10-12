const { expect, browser, $, toHaveHref } = require('@wdio/globals')
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

describe("Test suite", () => {
    it("first test", async () =>{
        await browser.url("https://es.wikipedia.org/wiki/Wikipedia:Portada");
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("Wikipedia, la enciclopedia libre")
    })

    it("Second test", async () =>{
        
        await browser.url("https://es.wikipedia.org/wiki/Wikipedia:Portada");
        const path = await $('//*[@id="Portales"]')
        expect(await path.getText()).toEqual('Portales')
    })

    it("Third test", async () =>{
        
        await browser.url("https://es.wikipedia.org/wiki/Wikipedia:Portada");
        const path = $('//*[@id="Recurso_del_día"]/a')
        expect(await path.getAttribute('href')).toHaveHref('/wiki/Wikipedia:Recurso_del_d%C3%ADa')
    })
 
    it("Fourth test", async () =>{ 
        await browser.url("https://es.wikipedia.org/wiki/Wikipedia:Portada");
        const image = $('//*[@id="main-tfa"]/p[1]/a[1]')
        expect(await image.waitForDisplayed()).toBeClickable()
        
    })
    it("Fifth test", async () =>{ 
        await browser.url("https://es.wikipedia.org/wiki/Wikipedia:Portada");
        const image = $('#main-tfa > figure > a > img')
        expect(await image.getAttribute('class')).toContain('mw-file-element')
    })
})

