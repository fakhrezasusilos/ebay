import HomePage from '../locator/homepage.js';
import { elementClick, elementSetValue, elementWaitForDisplayed } from '../../helpers/element-action-utils.js';
import { } from '../../helpers/assertions.js'

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
}

export default new Home();
