import { check, sleep } from "k6";

export default async function (page) {
  await page.goto("https://berrybenka.com/home/about");
  page.waitForSelector(".about-wrapper");
  page.screenshot({ path: "screenshots/04_about.png" });
  check(page, {
    "user dapat melihat text halaman about": (p) => p.locator(".about-wrapper"),
  });
  sleep(4);
}
