import { browser, logging } from 'protractor';
import { ProductsPage } from './products.po';

describe('workspace-project App', () => {
  let page: ProductsPage;

  beforeEach(() => {
    page = new ProductsPage();
    // browser.restart();
  });

  it('Should clean when the User add product', () => {
    page.navigateTo();
    page.getName().sendKeys('Some Name');
    page.getValue().sendKeys('5');
    page.getApprovalButton().click();

    expect(page.getName().getAttribute('value')).toEqual('');
    expect(page.getValue().getAttribute('value')).toEqual('0');
    expect(page.getApprovalButton().isEnabled()).toBe(false);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
