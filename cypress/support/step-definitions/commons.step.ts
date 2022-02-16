import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^I refresh page$/, () => {
    cy.reload();
});

When(/^I do nothing$/, () => { });
