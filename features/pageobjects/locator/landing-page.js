class LandingPage {

  async ebayLogo() { return $('.gh-logo'); }
  async searchInput() { return $('#gh-ac'); }
  async searchCategory() { return $('#gh-cat'); }
  async searchBtn() { return $('#gh-search-btn'); }
  async advanceSearchLink() { return $('.gh-search-button__advanced-link'); }
  async shopByCategory(){ return $('.gh-flyout__target'); }

}
export default new LandingPage();
