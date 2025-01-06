import {test, expect} from '@playwright/test'; 
import { SearchPage } from '../pages/search-page';
import testDataSet from '../../../data/ui/books.json';

test.describe('Book Search', () => {
    let searchPage: SearchPage;

    test.beforeEach(async ({page}) => {
      searchPage = new SearchPage(page);
      await page.goto('/');
    });

    test('should search and display unique book', async({page})=>{
      await searchPage.searchFor(testDataSet.searchQueries.valid);
      await expect(page).toHaveTitle(new RegExp(testDataSet.searchQueries.valid));
    });

});


