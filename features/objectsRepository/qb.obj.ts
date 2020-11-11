import { element, by } from "protractor";

export class qbrepository{

  readonly logInField = element(by.css("#mat-input-0"));  
  readonly passwordField = element(by.css("#mat-input-1"));
  readonly loginButton = element(by.css("button.mat-raised-button.mat-button-base.mat-primary"));
  readonly welcomeText = element(by.css("button.mat-menu-trigger.icon-right.mat-menu-item.ng-star-inserted > span"));

  readonly iframeElement = element(by.css("#jsd-widget"));

  readonly subjectField = element(by.css("#summary"));
  readonly issueDescriotionField = element(by.css("#description"));
  readonly yourContactEmailField = element(by.css("#email"));
  readonly sendButton = element(by.css("#submit-button"));
  readonly questionMarkButton = element(by.css("#help-button"));
  readonly modalName = element(by.css(".header-text"));
  readonly setupButton = element(by.css("a[href='/admin/company-info']"));
  readonly internationalCheckbox = element(by.css(".mat-checkbox-inner-container"));
  readonly internationalCheckboxChecked = element(by.css(".mat-checkbox-input:checked"));
  readonly accountInformationPageTitle = element(by.css("div.page-title-conf"));
  readonly welcomeMenuButton = element(by.css(".mat-menu-trigger.icon-right.mat-menu-item.ng-star-inserted"));
  readonly logOutButton = element(by.css(".mat-menu-item.ng-tns-c320-1:last-child"));
  readonly exitButton = element(by.css(".mat-button.mat-button-base.mat-primary.ng-star-inserted:nth-child(2)"));






}
