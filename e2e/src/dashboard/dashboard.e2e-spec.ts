import { browser, logging } from 'protractor';
import { ProductsPage } from '../products/products.po';
import { DashboardPage } from './dashboard.po';

describe('workspace-project Dashboard', () => {
  let page: DashboardPage;
  let productsPage: ProductsPage;

  beforeEach(() => {
    page = new DashboardPage();
    productsPage = new ProductsPage();

    // browser.restart();
  });

  it('Should show products to approval', () => {
    // Given
    page.navigateTo();
    productsPage.navigateTo();
    productsPage.addProductToApproval({ name: 'Test1', value: '1' });
    productsPage.addProductToApproval({ name: 'Test2', value: '2' });
    productsPage.addProductToApproval({ name: 'Test3', value: '3' });

    // When
    page.navigateTo();

    // Then
    expect(page.getPendingProducts().count()).toEqual(3);
  });


  it('Empty list to be approved', () => {
    // Given
    page.navigateTo();

    // When

    // Then
    expect(page.getNoPendingProductsText()).toEqual('No products to be approved')

  });


  it('Should not lost data when refresh', () => {

    // Given
    page.navigateTo();
    productsPage.navigateTo();
    productsPage.addProductToApproval({ name: 'Test1', value: '1' });
    productsPage.addProductToApproval({ name: 'Test2', value: '2' });
    productsPage.addProductToApproval({ name: 'Test3', value: '3' });
    page.navigateTo();

    // When
    browser.refresh();

    // Then
    expect(page.getPendingProducts().count()).toEqual(3);
  });


  it('Should show pending message when approval all products', () => {
    // Given
    page.navigateTo();
    productsPage.navigateTo();
    productsPage.addProductToApproval({ name: 'Test1', value: '1' });
    productsPage.addProductToApproval({ name: 'Test2', value: '2' });
    productsPage.addProductToApproval({ name: 'Test3', value: '3' });
    page.navigateTo();

    // When
    const buttons = page.getAllApprovalButtons().count()
      .then((buttonCount) => {
        for (let i = 0; i < buttonCount; i++) {
          page.getAllApprovalButtons().first().click();
        }
      });


    // Then
    expect(page.getNoPendingProductsText()).toEqual('No products to be approved')
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
