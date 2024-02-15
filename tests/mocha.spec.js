const { chromium } = require('playwright')
const expect = require("chai").expect

let browser
let page 

before (async () => {
    browser = await chromium.launch()
})

after(async () => {
    await browser.close();
})

beforeEach(async () => {
    page = awaitbrowser.newPage()
})

afterEach(async () => {
    await page.close()
})

it("My first playwright with mocha test", async () => {
    await page.goto('https://example.com')
    expect("h1").to.exist
})