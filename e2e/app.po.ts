import {browser, element, by, $} from 'protractor';
import {RecipeItem} from './model/RecipeItem';

export class RecipeAppPage {
  navigateTo() {
    return browser.get('/');
  }

  get title() {
    return browser.getTitle();
  }

  get bannerTitle() {
    return element(by.css('a.navbar-brand'));
  }

  get bannerHeaderText() {
    return element(by.css('a.navbar-brand')).getText();
  }

  get recipesLinkText() {
    return element(by.css('ul.nav.navbar-nav > li:nth-child(1)')).getText();
  }

  get bannerActiveLink() {
    return element(by.css('ul.nav.navbar-nav > li.active'));
  }
  get bannerActiveLinkText() {
    return this.bannerActiveLink.getText();
  }

  get shoppingListLinkText() {
    return element(by.css('ul.nav.navbar-nav > li:nth-child(2)')).getText();
  }

  get newRecipeButton() {
    return element(by.css('.btn.btn-success'));
  }

  get newRecipeButtonText() {
    return this.newRecipeButton.getText();
  }

  get informationPanel() {
    return element(by.css('app-recipe-list-template > p'));
  }

  get informationPanelContent() {
    return this.informationPanel.getText();
  }


  get allRecipeItems() {
    return element.all(by.css('app-recipe-list app-recipe-item'));
  }

  get firstRecipeItem() {
    return element(by.css('app-recipe-list app-recipe-item:first-child'));
  }


  getImageUrl(url) {
    return url.substring(url.lastIndexOf('/') + 1);
  }

  get allRecipeItemsEntities() {

    return this.allRecipeItems.map(function (item) {
      const recipeItem = new RecipeItem();


      item.element(by.tagName('img')).getAttribute('src').then(function (value) {
        recipeItem.image = value;
      });

      item.element(by.css('h4.media-heading')).getText().then(function (value) {
        recipeItem.title = value;
      });

      item.element(by.css('p.textBody')).getText().then(function (value) {
        recipeItem.description = value;
      });

      return recipeItem;

    });

  }

  get recipeDetail() {
    return element(by.tagName('app-recipe-detail'));
  }

  get recipeDetailImage() {
    return this.recipeDetail.element(by.tagName('img')).getAttribute('src');
  }

  get recipeDetailTitle() {
    return this.recipeDetail.element(by.tagName('h1')).getText();
  }

  get recipeDetailDescription() {
    return this.recipeDetail.element(by.css('h2')).getText();
  }

  get recipeDetailIngredients() {
    return this.recipeDetail.all(by.css('ul.list-group > li'));
  }

  get recipeDetailManageAction() {
    return element(by.css('app-recipe-detail  div.btn-group > button'));
  }

  get recipeDetailManageActionText() {
    return this.recipeDetailManageAction.getText();
  }

  get recipeDetailManageActionOptions() {
    return element.all(by.css('app-recipe-detail ul.dropdown-menu > li button'));
  }

  get recipeDetailAddToShoppingListAction() {
    return element.all(by.css('app-recipe-detail ul.dropdown-menu > li:first-child button'));
  }

  get shoppingListNameLabel() {
    return element(by.css('app-shopping-edit label[for="name"]'));
  }

  get shoppingListNameInputControl() {
    return element(by.id('name'));
  }

  get shoppingListAmountInputControl() {
    return element(by.id('amount'));
  }

  get shoppingListAmountLabel() {
    return element(by.css('app-shopping-edit label[for="number"]'));
  }

  get shoppingListPositiveButton() {
    return element(by.css('app-shopping-edit button.btn.btn-success'));
  }

  get shoppingListNegativeButton() {
    return element(by.css('app-shopping-edit button.btn.btn-danger'));
  }

  get shoppingListClearButton() {
    return element(by.css('app-shopping-edit button.btn.btn-primary'));
  }

  get shoppingListItems() {
    return element.all(by.css('ul.list-group a'));
  }
  get shoppingListItem() {
    return element(by.css('ul.list-group a:first-child'));
  }
}
