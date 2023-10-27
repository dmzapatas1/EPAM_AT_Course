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

// describe("Test suite - task 1", () => {
//     it("first test", async () =>{
//         await browser.url("https://es.wikipedia.org/wiki/Wikipedia:Portada");
//         const pageTitle = await browser.getTitle();

//         expect(pageTitle).toEqual("Wikipedia, la enciclopedia libre")
//     })

//     it("Second test", async () =>{
//         const path = await $('//*[@id="Portales"]')
//         expect(await path.getText()).toEqual('Portales')
//     })

//     it("Third test", async () =>{
//         const path = $('//*[@id="Recurso_del_día"]/a')
//         expect(await path.getAttribute('href')).toHaveHref('/wiki/Wikipedia:Recurso_del_d%C3%ADa')
//     })
 
//     it("Fourth test", async () =>{ 
//         const image = $('//*[@id="main-tfa"]/p[1]/a[1]')
//         expect(await image.waitForDisplayed()).toBeClickable()
        
//     })
//     it("Fifth test", async () =>{ 
//         const image = $('#main-tfa > figure > a > img')
//         expect(await image.getAttribute('class')).toContain('mw-file-element')
//     })
// })

//TASK 2

// describe("Test suite - task 2", () => {
//     it("first test", async () =>{
//         await browser.url("https://www.casadellibro.com.co/");
//         const layout = await $('#__layout')
//         expect(await layout.isExisting()).toEqual(true)
//     })
//     it("second test", async () =>{
//         const main = await $('.v-main')
//         expect(await main.isDisplayed()).toEqual(true)
//     })
//     it("third test", async () =>{
//         const input = await $('//*[@id="app"]/div[1]/div[1]/div[2]/div[2]/div/input')
//         expect(await input.setValue('James Clear'))
//         await browser.pause(5000)
//     })
//     it("fourth test", async () =>{
//         const bag = await $('//*[@id="app"]/div[1]/div[1]/div[2]/div[1]/button[2]')
//         await bag.waitForDisplayed({
//             timeout: 3000,
//             interval: 50
//         })   
//     })
//     it("fifth test", async () =>{
//       const button = await $('.login-btn')
//       await button.click({
//         button: 2,
//         x: 2,
//         y:300
//       })
//       await browser.pause(15000)
//      })

// })

// TASK 3

 describe("Test suite - task 3", () => {
      //   it("search item with execute", async () =>{
      //      await browser.url("https://www.mercadolibre.com.co/");
      //       const input = await $('input.nav-search-input');
      //       const search = await $('button.nav-search-btn[type="submit"]')
            
      //      await browser.execute(function(element){
      //         return element.value= "vans"
      //        }, input)
         
      //      await search.click()
      //      await browser.pause(15000)  
      //   })

      //   it("category menu displayed", async () =>{
      //    await browser.url("https://www.mercadolibre.com.co/");
      //     const category = await $('a.nav-menu-categories-link')
      //    const categoryMenu= await $('.nav-categs')
      //     category.click()
      //    await browser.waitUntil(
      //       async()=>
      //       await categoryMenu.isDisplayed(),
      //       { timeout: 8000, interval: 600, timeoutMsg: "not displayed" }
      //      )
      // })
      // it("doubleclick test", async () =>{
      //    await browser.url("https://mousetester.com/");
      //    const discounts = await $('#clickMe');
      //    await discounts.doubleClick();
      //    await browser.pause(5000);
      //   })
       
      //   it("drag and drop test", async () =>{
      //    await browser.url("https://www.e-education.psu.edu/geog777/h5p/embed/1950");
      //    const element = await $('.h5p-hidden-read');
      //    const position= await $('.h5p-inner.ui-droppable')
      //    await element.dragAndDrop(position, { duration: 500, xOffset: 30, yOffset: 20 });
      //    await browser.pause(5000);
      //   })
        it("set cookies", async () =>{
         await browser.url("https://www.casadellibro.com.co/");
         await browser.pause(5000);

         await browser.setCookies({
            name: 'test daniela',
            value: '50'
         })
         const cookies = await browser.getCookies('test daniela')
         console.log(cookies)
         await browser.pause(5000);
        })
    })
