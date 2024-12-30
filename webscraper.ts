import puppeteer from "puppeteer";
import fs from "fs";

async function scrapeAllLinks(url: string): Promise<string[]> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle2" });

    const links = await page.evaluate(() => {
      const anchorTags = document.querySelectorAll("a");
      return Array.from(anchorTags)
        .map((a) => a.href)
        .filter((href) => href);
    });

    const filteredLinks = Array.from(
      new Set(links.filter((link) => link.startsWith("https://x.com/")))
    );

    return filteredLinks;
  } catch (error) {
    console.error(`Error scraping links from ${url}:`, error);
    return [];
  } finally {
    // Close the browser
    await browser.close();
  }
}

async function main() {
  const websiteUrl = "https://www.solanaaihackathon.com/projects";
  console.log(`Scraping links from: ${websiteUrl}`);

  const links = await scrapeAllLinks(websiteUrl);

  console.log(
    `Found ${links.length} unique links starting with https://x.com/:`
  );
  console.log(links);

  const outputFilePath = "links.json";
  fs.writeFileSync(outputFilePath, JSON.stringify(links, null, 2));
  console.log(`Links saved to ${outputFilePath}`);
}

main();
