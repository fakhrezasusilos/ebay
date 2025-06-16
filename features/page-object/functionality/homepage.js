import HomePage from '../locator/homepage.js';
import { elementClick, elementGetText, elementSetValue, elementWaitForDisplayed } from '../../helpers/element-action-utils.js';
import { expect } from 'chai';

class Home {
  async navigateToHomepage() {
    await browser.url('https://www.ebay.com/');
    await elementWaitForDisplayed(await HomePage.searchInput());
  }

  async enterSearchTerm(searchTerm) {
    await elementSetValue(await HomePage.searchInput(), searchTerm);
  }

  async clickSearchButton() {
    await elementClick(await HomePage.searchButton());
  }

  async searchSuggestion(searchTerm) {
    await console.log("Check Top 5 suggestions");
    for (let i = 0; i < 5; i++) {
     const suggestionText = await elementGetText(await HomePage.ebaySuggestion(i));
     const matchFound = suggestionText.replace(/\s/g, '');
     expect(matchFound).to.include(searchTerm);
    }
  }
}

export default new Home();
