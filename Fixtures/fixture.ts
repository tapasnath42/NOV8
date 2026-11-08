import {test as base} from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";

type myfixture = {
    loginpageobj : LoginPage;
}

export const test = base.extend<myfixture>({

    loginpageobj: async ({page}, use)=>{
        const loginpageobj = new LoginPage(page);
        await use(loginpageobj);
    }

});

export {expect} from "@playwright/test";