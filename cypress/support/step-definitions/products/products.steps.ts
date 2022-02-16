import { And, Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { ProductsPage } from '../../pages/products/products.po';

let page: ProductsPage;

Before(() => {
  page = new ProductsPage();
});

// Given(/^I am on the home page$/, () => {
//   page.navigateTo();
//   // cy.visit('/');
// });

Given(/^I am on the products page$/, () => {
  page.initialPage();
  page.navigateTo();
});

And(/^I do fill out product a product$/, () => {
  page.getName().type('Some Name');
  page.getValue().type('5');
});

When(/^I do click on "Ask Approval"$/, () => { 
  page.getApprovalButton().click();
});

Then(/^I should see the fields on initial state$/, () => {
  page.getName().should('have.value', '');
  page.getValue().should('have.value', 0);
  page.getApprovalButton().should('be.disabled');
});