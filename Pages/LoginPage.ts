import { Locator, Page } from "@playwright/test";
import { Basepage } from "./Basepage";
import jsondata from "../JSON/testdata.json";
import dotenv from "dotenv";
dotenv.config({path:'ENV/.env.QA'});


export class LoginPage extends Basepage{

    private readonly username : Locator;
    private readonly password : Locator;
    private readonly loginButton : Locator;

    constructor(page:Page){
        super(page);
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.locator("//input[@id='login-button']");
    }

    /**
     * Login into the application.
     */
    async loginToApplication(){
        await this.page.goto("/");
        await this.fill(this.username, process.env.username as string);
        await this.fill(this.password, process.env.password as string);
        await this.click(this.loginButton);
        await this.page.waitForTimeout(3000);
    }


    /**
     * Login into the application.
     */
    async loginToApplication1(){
        await this.page.goto("/");
        await this.fill(this.username, jsondata.username);
        await this.fill(this.password, jsondata.password);
        await this.click(this.loginButton);
        await this.page.waitForTimeout(3000);
    }


}