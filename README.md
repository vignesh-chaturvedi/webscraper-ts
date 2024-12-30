# Web Scraper for Extracting Specific Links

This TypeScript-based web scraper uses Puppeteer to extract unique links starting with `https://x.com/` from a given webpage. The results are stored in a JSON file.

## Features

- Extracts all links from a webpage.
- Filters links to include only those starting with `https://x.com/`.
- Removes duplicate links.
- Saves the filtered links to a `links.json` file.

## Prerequisites

- Node.js installed on your system.
- TypeScript installed globally or locally in your project.
- Basic knowledge of JavaScript/TypeScript and Node.js.

## Installation

1. Clone the repository or copy the script file.
2. Install the required dependencies:
   ```bash
   npm install puppeteer
   ```

## Usage

1. Update the `websiteUrl` variable in the script to the URL of the webpage you want to scrape.
2. Run the script:
   ```bash
   npx ts-node <script-name>.ts
   ```

## Output

- The scraper saves the filtered links in a file named `links.json` in the same directory as the script.
- The console will display the number of unique links found and the list of links.

## Script Overview

### Main Functionality

- **`scrapeAllLinks`**: Navigates to the given webpage using Puppeteer and extracts all anchor tags (`<a>`).
- Filters links that start with `https://x.com/` and removes duplicates.
- Returns the filtered list of links.

### File Operations

- Saves the filtered links as a prettified JSON array in `links.json`.

## Example

1. Set `websiteUrl` to `https://www.solanaaihackathon.com/projects`.
2. Run the script:
   ```bash
   npx ts-node scraper.ts
   ```
3. Output example:
   - Console:
     ```
     Found 15 unique links starting with https://x.com/:
     [
       "https://x.com/project1",
       "https://x.com/project2",
       ...
     ]
     ```
   - `links.json`:
     ```json
     ["https://x.com/project1", "https://x.com/project2"]
     ```

## Dependencies

- **Puppeteer**: Automates Chromium to scrape dynamic content.
- **fs**: Node.js module to handle file operations.

## Notes

- Ensure the webpage is accessible and allows web scraping.
- If the webpage's content is protected by CAPTCHA or other anti-scraping mechanisms, you may need to handle these explicitly.
