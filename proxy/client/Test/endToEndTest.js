const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:5003/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    // slowMo: 80,
    args: [`--window-size=${width}, ${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('search function', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('initial title is correct', async () => {
    let div = '.hostedBy';
    const title = await page.$eval(div, e => e.textContent);
    expect(title).toEqual('2 guests · 1 bedroom · 2 beds · 1.5 baths');
  });
});