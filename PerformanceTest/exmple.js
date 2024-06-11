//! 1. init code
// import http from "k6/http";
import { sleep } from "k6";
import smoke_test from "./config/smoke_test.js";
import ikea from "./groups/ikeaDashboard.js";
import thresholds from "./config/thresholds.js";
import { browser } from "k6/experimental/browser";
import dashboard from "./browser-test/newFile.js";
const listScenario = {
  smoke_test,
};

//! run in command with "k6 run -e scenario=smoke_test .\modularize-abstract.js"

export const options = {
  //   thresholds,
  scenarios: {
    // smoke_test_scenario: listScenario[__ENV.scenario] || smoke_test,
    browserBased: {
      executor: "shared-iterations",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
};

export default async function () {
  const page = browser.newPage();
  try {
    await dashboard(page);
  } finally {
    page.close();
  }
}

// export default function () {
//   // withLogin(data);
//   // withoutLogin();
//   ikea();
//   sleep(1);
// }
