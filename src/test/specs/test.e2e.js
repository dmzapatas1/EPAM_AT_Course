const { expect, browser, $ , $$} = require('@wdio/globals');
const { read } = require('graceful-fs');
const { it, beforeEach } = require('mocha')
const CasadellibroPage = require('./../../po/pages/casadellibro.page');
const casadellibroPage = new CasadellibroPage
//TASK 1

// describe("Test suite - task 1", () => {
//     beforeEach(async() =>{
//         await browser.url("https://es.wikipedia.org/wiki/Wikipedia:Portada")  
//     } )
//     it("first test - Title check", async () =>{
//         const pageTitle = await browser.getTitle();
//         expect(pageTitle).toEqual("Wikipedia, la enciclopedia libre")
//     })

//     it("Second test - Section title ID CSS selector ", async () =>{
//         const path = await $('[id="Portales"]')
//         expect(await path.getText()).toEqual('Portales')
//     })

//     it("Third test - ID CSS selector ", async () =>{
//         const path = $('*[id="Recurso_del_día"]')
//         expect(await path.getAttribute('href')).toHaveHref('/wiki/Wikipedia:Recurso_del_d%C3%ADa')
//     })
 
//     it("Fourth test- checking clickable image Xpath selector", async () =>{ 
//         const image = $('//*[@id="main-tfa"]/p[1]/a[1]')
//         expect(await image.waitForDisplayed()).toBeClickable()
        
//     })
//     it("Fifth test - Checking class contain", async () =>{ 
//         const image = $('#main-tfa > figure > a > img')
//         expect(await image.getAttribute('class')).toContain('mw-file-element')
//     })
// })

//TASK 2

describe("Test suite - task 2", () => {
    beforeEach(async() =>{
        await casadellibroPage.open();    
    } )

    it("first test - isExisting() basic command is using", async () =>{

        //accept cookies 
        const cookies = $('#onetrust-accept-btn-handler')
        await cookies.click()

        const layout = await $('#__layout')
        expect(await layout.isExisting()).toEqual(true)
    })
    it("second test isDisplayed() basic command is using", async () =>{
        const main = await $('.v-main')
        expect(await main.isDisplayed()).toEqual(true)
    })
    it("third test - search a author in the navbar", async () =>{
        const element = await $('#app').$('.v-application--wrap').$('.when-mobile').$('.cabecera.desktop')
        const input = await element.$('.top-row.py-2').$('.buscador').$('.book-finder')
        await input.click();
        const inputElement = await $('.x-search-input');
        await inputElement.setValue('James Clear');
        const result = await $('.x-text1.x-font-regular.x-uppercase.x-text-neutral-75.x-line-clamp-2')

        await browser.pause(5000)
        expect(await result.getText()).toEqual('JAMES CLEAR')    
    })
    it("fourth test - using waitForDisplayed() for the shopping cart button", async () =>{
        const element = await $('#app').$('.v-application--wrap').$('.when-mobile').$('.cabecera.desktop')
        const bag = await element.$('button')
        await bag.waitForDisplayed({
            timeout: 3000,
            interval: 50,
            timeoutMsg: 'Expected shopping cart button to be displayed within 3000ms',
        })  
    })

    it("fifth test - custom click", async () =>{
        const element = await $('#app').$('.v-application--wrap').$('.when-mobile')
        const button = await element.$('.cabecera.desktop').$('.top-row.py-2').$('.login-btn')
        await button.waitForDisplayed();
        await button.click({
            button: 'right',
            x: 2,
            y: 300
        });
      await browser.pause(15000)
     })

})

// TASK 3

//  describe("Test suite - task 3", () => {
//         it("first test - search item with execute", async () =>{
//            await browser.url("https://www.mercadolibre.com.co/");
//             const input = await $('input.nav-search-input');
//             const search = await $('button.nav-search-btn[type="submit"]')
            
//             //search value
//            await browser.execute(function(element){
//               return element.value= "vans"
//              }, input) 
//            await search.click()
//             // verifiy if the value search is correctly
//            const currentURL = await browser.getUrl();
//            expect(await currentURL.includes('vans')).toEqual(true);
//            await browser.pause(5000)  
//         })

//         it("second test - category menu displayed", async () =>{
//          await browser.url("https://www.mercadolibre.com.co/");
//           const category = await $('a.nav-menu-categories-link')
//           const categoryMenu= await $('.nav-categs')
//           category.click()
//          await browser.waitUntil(
//             async()=>
//             await categoryMenu.isDisplayed(),
//             { timeout: 8000, interval: 600, timeoutMsg: "not displayed" }
//            )
//         const isCategoryMenuExisting = await categoryMenu.isExisting();
//         expect(isCategoryMenuExisting).toEqual(true, 'menu category is not visible');
//         })
//       it("third test - doubleclick test", async () =>{
//          await browser.url("https://mousetester.com/");
//          const discounts = await $('#clickMe');
//          await discounts.doubleClick();
//          await browser.pause(5000);

//          const clicks = await $('#button_0_double')
//          const clicksCount = await clicks.getText();
//          expect(parseInt(clicksCount)).toEqual(1, 'the double click is not executed');
//         })
       
//         it("fourth test - drag and drop test", async () =>{
//          await browser.url("https://www.e-education.psu.edu/geog777/h5p/embed/1950");
//          const element = await $('.h5p-hidden-read');
//          const position= await $('.h5p-inner.ui-droppable')
//          await element.dragAndDrop(position, { duration: 500, xOffset: 30, yOffset: 20 });
//          await browser.pause(5000);

//          const droppedText = await $('.h5p-draggable.ui-draggable.ui-draggable-handle.h5p-advanced-text.h5p-dropped');
//          expect(await droppedText.isExisting()).toEqual(true);
//         })
//         it("fifth test - set cookies", async () =>{
//          await browser.url("https://www.casadellibro.com.co/");
//          await browser.pause(5000);
//             // set new cookie
//          await browser.setCookies({
//             name: 'test_daniela',
//             value: '50'
//          })
//          //get all cookies
//         const cookies = await browser.getCookies('test_daniela');
//         // Filter cookie
//         const testDanielaCookie = cookies.find(cookie => cookie.name === 'test_daniela');
//         // check if the cookie is set correctly
//         expect(testDanielaCookie.value).toEqual('50', 'the value of the cookie is not correct');
//         })
//         it('sixth test - local storage', async () => {
//          const key = "myStorage";
//          const value = "hi";
 
//          await browser.execute(function (key, value) {
//              window.localStorage.setItem(key, value);
//          }, key, value);
//          const readValue = await browser.execute(function (key) {
//              return window.localStorage.getItem(key);
//          }, key);
//          console.log(readValue);
//          expect (readValue).toEqual('hi')
//      });
//     })

