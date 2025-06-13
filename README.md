# 🛠 eBay Cucumber‑WebdriverIO Test Suite

This repository contains end-to-end UI tests for the eBay website, implemented using WebdriverIO and Cucumber.js, with CI automation on GitHub Actions.

---

## 🔧 Features

- **WebdriverIO** for browser automation  
- **Cucumber.js** for BDD-style step definitions  
- **Automatic artifact upload** (JSON + HTML reports + screenshots)  
- **HTML report generation** using `cucumber-html-reporter`  
- **CI triggered on push or PR**, using Github Action with test results can downloaded

---

## 🚀 Quick Start

### 1. Clone & install

```bash
git clone https://github.com/fakhrezasusilos/ebay.git
cd ebay
npm ci
