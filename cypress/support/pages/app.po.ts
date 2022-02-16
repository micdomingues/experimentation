
export class AppPage {
  navigateTo() {
   return cy.visit('/');
  }

  getTitleText() {
    return cy.get('h1');
  }
}