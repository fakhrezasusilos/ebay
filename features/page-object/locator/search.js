class SearchPage {

  async searchInput() {
    return $('#gh-ac');
  }

  async searchButton() {
    return $('#gh-search-btn');
  }

  async categoryDropdown() {
    return $('#gh-cat');
  }

  async searchResult() {
    return $('.srp-controls__count-heading');
  }

  async emptySearchResult() {
    return $('.srp-save-null-search__heading');
  }

  async paginationNextButton() {
    return $('.pagination__next');
  }

}

export default new SearchPage();
