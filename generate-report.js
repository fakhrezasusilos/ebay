import reporter from "cucumber-html-reporter";

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/json/report.json', // or match your actual output
  output: './reports/html/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "Browser": "Chrome",
    "Platform": "GitHub Actions",
    "Executed": "CI"
  }
};

reporter.generate(options);
