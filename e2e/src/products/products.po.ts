import { browser, by, element, ElementFinder } from 'protractor';

export class ProductsPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/products`) as Promise<unknown>;
  }
  
  getName(): ElementFinder {
    return  element(by.css('input#productName'));
  }

  getValue(): ElementFinder {
    return element(by.css('input#productAmount'));
  }
  
  getApprovalButton(): ElementFinder {
    return element(by.css('button#product-btn-aprroval'));
  }

  addProductToApproval(data: { name: string, value: string }): void {
    this.getName().sendKeys(data.name);
    this.getValue().sendKeys(data.value);
    this.getApprovalButton().click();
  }

}
