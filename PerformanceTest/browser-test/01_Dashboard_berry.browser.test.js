import { sleep, check } from "k6";

export default async function (page) {
  await page.goto("https://berrybenka.com/");
  page.waitForSelector(".header-down .header-mid");
  page.screenshot({ path: "screenshots/01_dashboard.png" });

  // console.log(page.locator(".header-down .header-mid")),
  check(page, {
    "user dapat menekan logo beranda": (p) =>
      p.locator(".header-down .header-mid"),
  });
  sleep(4);
}
