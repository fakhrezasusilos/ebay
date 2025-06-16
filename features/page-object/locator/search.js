class SearchPage {

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
