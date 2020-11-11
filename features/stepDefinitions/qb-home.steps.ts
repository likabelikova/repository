import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { QBHomePage } from "../pageObjects/qb-home.page";
import { threadId } from "worker_threads";


export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let qbHomePage = new QBHomePage();

    //Unique identifier    
    let uniqueIndentifier: string;

    //Swagger API Caller

    //Chai-as-Promised setup
    chai.use(require('chai-as-promised'));

    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        // await browserHacks.ClearBrowserData();
    });

    //Step Definitions

    //Given expression, can only be used with Given in .feature file
    this.Given(/^I am on QB homepage$/, async () => {
        await browser.navigate().to(browser.params.qbByURL);
        await qbHomePage.Loaded();
    });

    this.Then(/^I see QB homepage$/, async () => {
        await qbHomePage.Loaded();
    });

    //Can only be used with When, Then, And expressions in .feature file
    this.When(/^enter "(.*?)" in (\w+) field/, async (value, key) => {
        await qbHomePage.FillField(key, value);
    });


    this.Then(/^I click on "(.*?)" button/, async (value) => {
        await qbHomePage.clickButton(value);
    });

    this.Then(/^I see welcoming "(.*?)" item/, async (text) => {
        await qbHomePage.WelcomeText(text);
    });

    this.Then(/^"(.*?)" modal is opened/, async (title) => {
        await qbHomePage.ModalTitle(title);
    });

    this.When(/^I check "(.*?)" Checkbox/, async (key) => {
        await qbHomePage.checkCheckbox(key);
    });

    this.Then(/^"(.*?)" Checkbox is checked/, async (key) => {
        await qbHomePage.checkboxChecked(key);
    });

    this.Then(/^I see "(.*?)" page title/, async (title) => {
        await qbHomePage.PageTitle(title);
    })
    //Can only be used with When, Then, And expressions in .feature file
    // this.Then(/^I see "(.*?)" item/, async (value) => {
    //     await onliner.VerifyItemIsVisible(value);
    // });
}