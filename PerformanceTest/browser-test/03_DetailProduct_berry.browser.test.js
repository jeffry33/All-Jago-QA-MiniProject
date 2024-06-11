import { sleep, check } from "k6";

export default async function (page) {
  await page.goto(
    "https://berrybenka.com/clothing/outerwear/303095/milli-dakota-stripes-knit-sweater-black?trc_sale=new-arrival+women"
  );
  page.waitForSelector(".prod-desc .wrapper-sticky .button");
  page.screenshot({ path: "screenshots/03_detailProduct.png" });
  check(page, {
    "user dapat menekan tombol beli": (p) =>
      p.locator(".prod-desc .wrapper-sticky .button"),
  });
  sleep(4);
}
