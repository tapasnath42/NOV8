import {test, expect} from "../Fixtures/fixture";

test("login into the application", async ({loginpageobj})=>{

    await loginpageobj.loginToApplication1();

});

