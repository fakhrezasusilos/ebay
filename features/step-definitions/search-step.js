import { Given, When, Then } from '@cucumber/cucumber';
import Home from '../page-object/functionality/homepage.js';
import ProducListing from '../page-object/functionality/product-listing.js';

Given('the user is on the eBay homepage', async () => {
  await Home.navigateToHomepage();
});

When('the user enters {string} in the search bar', async (searchTerm) => {
  await Home.enterSearchTerm(searchTerm);
});

When('clicks on the search button', async () => {
  await Home.clickSearchButton();
});

Then('the user should see search results for {string}', async (searchTerm) => {
  await ProducListing.getSearchResult(searchTerm);
});

Then('the user should see a message indicating no results found', async () => {
  await ProducListing.noSearchResult();
});
