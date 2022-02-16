
export class ProductsPage {
  
  
  initialPage() {
    return cy.visit('/');
   }

  navigateTo() {
    return cy.get('nav #nav-products').click();
   }

  getName() {
    return cy.get('input#productName');
  }

  getValue() {
    return cy.get('input#productAmount');
  }

  getApprovalButton() {
    return cy.get('button#product-btn-aprroval')
  }

  addProductToApproval(data: { name: string, value: string }) {
    this.getName().type(data.name);
    this.getValue().type(data.value);
    this.getApprovalButton().click();
  }
}