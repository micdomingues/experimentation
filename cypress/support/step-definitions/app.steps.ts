import { Before, Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

// Given(/^I am on the home page$/, () => {
//   page.navigateTo();
//   // cy.visit('/');
// });

Given(/^I am on the home page$/, () => {
  page.navigateTo();
});

Then(/^I should see the title$/, () => {
  page.getTitleText().contains('Experimentation App');
});