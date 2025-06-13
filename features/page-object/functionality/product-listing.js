import SearchPage from '../locator/search.js';
import { elementWaitForDisplayed } from '../../helpers/element-action-utils.js';
import {  assertElementIsNotDisplayed, assertIncludeText } from '../../helpers/assertions.js'

class ProducListing {

  async getSearchResult(searchResult){
    await assertIncludeText(await SearchPage.searchResult(), searchResult);
  }

  async noSearchResult(){
    await assertIncludeText(await SearchPage.emptySearchResult(),"No exact matches found");
    await assertIncludeText(await SearchPage.searchResult(), "0 results");
  }

}

export default new ProducListing();
