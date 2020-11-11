import { browser, ElementFinder, ExpectedConditions, promise } from "protractor";
import { qbrepository } from "../objectsRepository/qb.obj";
const defaultTimeout = 60000;
export class QBHomePage {
    readonly homePageElements = new qbrepository();

    public async Loaded(): promise.Promise<void> {
        //Check that element is both present in DOM and visible on screen
        await browser.wait(ExpectedConditions.visibilityOf(this.homePageElements.loginButton), defaultTimeout, "Homepage not loaded");
    }

    public async FillField(key: string, value: string): promise.Promise<void> {
        await this.switchBrowser(key);
        const field = this.getFieldElement(key);
        await browser.wait(ExpectedConditions.visibilityOf(field), defaultTimeout, `${key} not visible`);
        await field.sendKeys(value);
    }

    public async clickButton(key: string): promise.Promise<void> {
        await this.switchBrowser(key);
        const button = this.getButtonElement(key);
        await browser.wait(ExpectedConditions.visibilityOf(button), defaultTimeout, `${key} button not visible`);
        await button.click();

    }

    public async WelcomeText(text: string): promise.Promise<void> {

        await browser.wait(ExpectedConditions.visibilityOf(this.homePageElements.welcomeText), defaultTimeout, "Welcome Text not visible");
        if (text !== await this.homePageElements.welcomeText.getText()) {
            throw new Error("Welcome Text is wrong");
        }
    }

    public async ModalTitle(title: string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.homePageElements.modalName), defaultTimeout, "Modal Title not visible");
        if (title !== await this.homePageElements.modalName.getText()) {
            throw new Error("Modal title is wrong");
        }
    }

    public async PageTitle(title: string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.homePageElements.accountInformationPageTitle), defaultTimeout, "Page Title not visible");

        if (title !== await this.homePageElements.accountInformationPageTitle.getText()) {
            throw new Error("Page title is wrong");
        }
    }

    public async checkCheckbox(key: string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.homePageElements.internationalCheckbox), defaultTimeout, "Checkbox not visible");
        if (!await this.homePageElements.internationalCheckbox.isSelected()) {
            await this.homePageElements.internationalCheckbox.click();
        }

    }
    public async checkboxChecked(key: string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.homePageElements.internationalCheckboxChecked), defaultTimeout, "Checkbox not checked");
    }

    private getFieldElement(key: string): ElementFinder {
        switch (key) {
            case "UserName":
                return this.homePageElements.logInField;
            case "Password":
                return this.homePageElements.passwordField;
            case "Subject":
                return this.homePageElements.subjectField;
            case "IssueDescription":
                return this.homePageElements.issueDescriotionField;
            case "YourContactEmail":
                return this.homePageElements.yourContactEmailField;
            default: throw new Error(`Field ${key} is not defined`)


        }
    }
    private getButtonElement(key: string): ElementFinder {
        switch (key) {
            case "Login":
                return this.homePageElements.loginButton;
            case "?":
                return this.homePageElements.questionMarkButton;
            case "Send":
                return this.homePageElements.sendButton;
            case "Setup":
                return this.homePageElements.setupButton;
            case "Welcome Menu":
                return this.homePageElements.welcomeMenuButton;
            case "Logout":
                return this.homePageElements.logOutButton;
            case "Exit":
                return this.homePageElements.exitButton;
            default: throw new Error(`Button ${key} is not defined`);

        }
    }

    private async switchBrowser(key: string): promise.Promise<void> {
        try {
            switch (key) {
                case "?":
                case "Send":
                case "Subject":
                case "IssueDescription":
                case "YourContactEmail":
                case "Issue":
                    await browser.switchTo().frame(this.homePageElements.iframeElement.getWebElement());
                    break;
                default:
                    await browser.switchTo().window('');
                    break;

            }
        } catch (e) { }

    }

    // public async VerifyItemIsVisible(name: string): promise.Promise<void> {

    //     //Wait till element is present in DOM, but not necessary  visible
    //     await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.searchPopupIframe), defaultTimeout, "Iframe not loaded");
    //     //Check that Cvent Online Registration page loaded and you can proceed with next actions
    //     await browser.switchTo().frame(this.onlinerElements.searchPopupIframe.getWebElement());

    //     //in very rare cases you should put elements in page object directly, not via object repository, like in this case:
    //     //we need to search for a specific element by name and easiest way is to search via xpath with expression contains()
    //     let searchedElement = element(by.xpath(`//div[@class='product__title']/a[contains(text(),'${name}')]`));

    //     //Asserting that element is visible
    //     await browser.wait(ExpectedConditions.visibilityOf(searchedElement), defaultTimeout, `"${name}" item not found in Search Results`);
    // }
}