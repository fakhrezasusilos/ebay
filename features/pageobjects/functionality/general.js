import { elementClick, elementSetValue, elementWaitForDisplayed } from "../../helpers/element-action-utils.js";
import LandingPage from "../locator/landing-page.js";

class General {

    async searchFunction(searchText) {
        await elementWaitForDisplayed(await LandingPage.searchInput());
        await elementSetValue(await LandingPage.searchInput(), searchText);
        await elementClick(await LandingPage.searchBtn());
    }

}
export default new General();