import { sleep, check } from "k6";

export default async function (page) {
  await page.goto("https://berrybenka.com/new-arrival/women");
  page.waitForSelector(".catalog-list #li-catalog img");
  page.screenshot({ path: "screenshots/02_newArrival.png" });
  check(page, {
    "user dapat menekan tombol item list pertama": (p) =>
      p.locator(".catalog-list #li-catalog img"),
  });
  sleep(4);
}
