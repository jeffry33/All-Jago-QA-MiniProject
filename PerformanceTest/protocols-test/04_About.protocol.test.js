import { Trend } from "k6/metrics";
import { check, group } from "k6";
import http from "k6/http";
import { harAbout } from "../batchResponse/harAbout.js";

const pageDuration = new Trend("page_about_duration", true);

export default function () {
  group("02_about_page", () => {
    const responses = http.batch(harAbout);
    for (const res of responses) {
      pageDuration.add(res.timings.duration);
      check(res, {
        "status 200": (res) => res.status === 200,
      });
    }
  });
}
