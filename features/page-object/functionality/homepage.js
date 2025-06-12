import SearchPage from '../locator/search.js';
import { elementClick, elementSetValue, elementWaitForDisplayed } from '../../helpers/element-action-utils.js';
import { } from '../../helpers/assertions.js'

class Home {
  async navigateToHomepage() {
    await browser.url('https://www.ebay.com/');
    await elementWaitForDisplayed(await SearchPage.searchInput());
  }

  async enterSearchTerm(searchTerm) {
    await elementSetValue(await SearchPage.searchInput(), searchTerm);
  }

  async clickSearchButton() {
    await elementClick(await SearchPage.searchButton());
  }
}

export default new Home();
