import { Trend } from "k6/metrics";
import { harDashboard } from "../batchResponse/resDashboard.js";
import { check, group } from "k6";
import http from "k6/http";

const pageDuration = new Trend("page_dashboard_duration", true);

export default function () {
  group("01_login_page", () => {
    const responses = http.batch(harDashboard);
    for (const res of responses) {
      pageDuration.add(res.timings.duration);
      check(res, {
        "status 200": (res) => res.status === 200,
      });
    }
  });
}
