import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class DashboardPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}`) as Promise<unknown>;
  }

  getPendingProducts(): ElementArrayFinder {
    return element.all(by.css('div.list-approval'));
  }

  getNoPendingProductsText(): Promise<string> {

    return element(by.css('p.empty-products')).getText() as Promise<string>;
  }

  getAllApprovalButtons(): ElementArrayFinder {
    return this.getPendingProducts().all(by.css('button'));
  }

  /**
   *  page.initialPage();

  productPage.navigateTo();

  productPage.addProductToApproval({ name: 'Test1', value: '1' });
  productPage.addProductToApproval({ name: 'Test2', value: '2' });
  productPage.addProductToApproval({ name: 'Test3', value: '3' });

  page.navigateTo();
   */
  

}
