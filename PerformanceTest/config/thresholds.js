const thresholds = {
  checks: ["rate>0.98"],
  group_duration: ["avg<600", "p(90)<1000"],
  http_req_duration: ["avg<600", "p(90)<1000"],
  http_req_failed: ["rate<0.01"],
  browser_web_vital_cls: ["p(75)<0.25"], //Cumulative Layout Shift (CLS) = ga sengaja pindah ditempat
  browser_web_vital_fcp: ["p(75)<3000"], //First Contentful Paint (FCP) = konten/komponen pertama muncul
  browser_web_vital_lcp: ["p(75)<400"], //Largest Contentful Paint (LCP) = nunggu gambar size tergede muncul
  browser_web_vital_ttfb: ["p(75)<1800"], //Time to First Byte (TTFB) = data pertama refresh konten yang muncul pertama kali download di network
};
export default thresholds;

// https://web.dev/articles/ttfb
