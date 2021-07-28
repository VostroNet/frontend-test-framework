import puppeteer from "puppeteer";
import path from "path";

const filePath = path.resolve(process.cwd(), "./static/index.html");

test("puppeteer test", async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${filePath}`);
    await page.screenshot({ path: 'example.png' });
    await browser.close();
});