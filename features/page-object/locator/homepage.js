class HomePage {

  async searchInput() {
    return $('#gh-ac');
  }

  async searchButton() {
    return $('#gh-search-btn');
  }

  async categoryDropdown() {
    return $('#gh-cat');
  }
  async ebaySuggestion(i) {
    return $(`#ebay-ac-suggestion-${i}`);
  };
  
}
export default new HomePage();
