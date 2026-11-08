import { Locator, Page } from "@playwright/test";

export class Basepage{

    protected readonly page : Page;

    constructor(page:Page){
        this.page = page;
    }

    /**
     * Fill in the input textbox.
     * @param locator : Page Locator.
     * @param value : Value to fill up in the Page Locator.
     */
    async fill(locator:Locator, value:string){
        await locator.fill(value);
    }

    /**
     * Clicks on the Locator.
     * @param locator : Locator.
     */
    async click(locator:Locator){
        locator.click();
    }

}