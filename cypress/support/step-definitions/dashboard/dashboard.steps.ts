import { And, Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { DashboardPage } from '../../pages/dashboard/dashboard.po';
import { ProductsPage } from '../../pages/products/products.po';

let page: DashboardPage;
let productPage: ProductsPage;

Before(() => {
  page = new DashboardPage();
  productPage = new ProductsPage();
});

Given(/^I am on the dashboard page$/, () => {
  page.initialPage();

});

And(/^I have some products to approval$/, () => {
  page.initialPage();

  productPage.navigateTo();

  productPage.addProductToApproval({ name: 'Test1', value: '1' });
  productPage.addProductToApproval({ name: 'Test2', value: '2' });
  productPage.addProductToApproval({ name: 'Test3', value: '3' });

  page.navigateTo();

});



When(/^I do click on "Approval" on every product$/, () => {

  page.getAllProducts().find('button').click({ multiple: true })

});

When(/^I do not have products to approval$/, () => {
  // Do nothing
});

Then(/^I should see empty message approval$/, () => {
  page.hasNoPendingProducts();
});

Then(/^I should see some products to be approved$/, () => {
  page.hasPendingProducts({ length: 3 });
});