import { Trend } from "k6/metrics";
import { check, group } from "k6";
import http from "k6/http";
import { harDetailProduct } from "../batchResponse/harDetailProduct.js";

const pageDuration = new Trend("page_detailProduct_duration", true);

export default function () {
  group("02_detail_product_page", () => {
    const responses = http.batch(harDetailProduct);
    for (const res of responses) {
      pageDuration.add(res.timings.duration);
      check(res, {
        "status 200": (res) => res.status === 200,
      });
    }
  });
}
