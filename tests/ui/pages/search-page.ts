import { Page, Locator } from '@playwright/test';

export class SearchPage{
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly bookCards: Locator;

  constructor(private page: Page){
    //this.searchInput = page.getByPlaceholder('Search products...');
    this.searchInput = page.locator("input[type='search']");
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.bookCards = page.locator('.product');
}

  async searchFor(query: string){
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }
}

