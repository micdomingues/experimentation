
export class DashboardPage {

  initialPage() {
    return cy.visit('/');
  }

  navigateTo() {
    return cy.get('nav #nav-dashboard').click();
  }

  hasNoPendingProducts() {
    cy.get('p.empty-products').should(($p) => {
      expect($p).to.have.length(1);
      expect($p.eq(0)).to.contain('No products to be approved');
    });
  }

  hasPendingProducts(options: { length: number }) {
    cy.get('div.list-approval').should(($div) => {
      expect($div).to.have.length(options.length);
    });
  }
  
  getAllProducts() {
    return cy.get('div.list-approval');
  }
  
  getAllButtons() {
    return this.getAllProducts().find('button');
  }

}