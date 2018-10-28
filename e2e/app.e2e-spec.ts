import {RecipeAppPage} from './app.po';
import {RecipeItem} from './model/RecipeItem';
import {Expected} from './data/Expected';
import {browser, element, by, $} from 'protractor';
import {WebElement} from 'selenium-webdriver';

describe('Given the Recipe Book App is opened', () => {

  let page: RecipeAppPage;

  beforeAll(() => {
    page = new RecipeAppPage();
    page.navigateTo();

  });

  describe('When the Recipe page is available', () => {

    it('Should display the page title as "RecipeApp"', () => {

      expect(page.title).toEqual('RecipeApp');

    });

    it('Should display the banner header as "Recipe Book"', () => {

      expect(page.bannerHeaderText).toEqual('Recipe Book');

    });

    it('Should display "Recipes" tab', () => {

      expect(page.recipesLinkText).toEqual('Recipes');

    });

    it('Should display "Shopping List" tab', () => {

      expect(page.shoppingListLinkText).toEqual('Shopping List');

    });

    it('Should active/highlighted tab text as "Recipes"', () => {

      expect(page.bannerActiveLinkText).toEqual('Recipes');

    });

  });

  describe('When the page sub header section is shown', () => {

    it('Should display "New Recipe" Button', () => {

      expect(page.newRecipeButtonText).toEqual('New Recipe');

    });

    it('Should display "New Recipe" Button is disabled', () => {

      expect(page.newRecipeButton.getAttribute('disabled')).toBeTruthy();

    });

    it('Should display information panel with text "Please select a recipe from the list"', () => {

      expect(page.informationPanelContent).toEqual('Please select a recipe from the list');

    });

  });

  describe('When the recipes list is shown', () => {

    let allRecipeItems: RecipeItem[] = [];

    beforeAll(() => {
      page.allRecipeItemsEntities.then((elements) => {
        allRecipeItems = elements as RecipeItem[];
      });
    });

    it('Should display 5 Recipes', () => {
      expect(allRecipeItems.length).toEqual(5);

    });

    describe('When Recipes with image, title and description is displayed', () => {

      Expected.Recipes.forEach((expectedRecipeItem, index) => {

        let recipeItem: RecipeItem;

        beforeEach(() => {
          recipeItem = allRecipeItems[index];
        });

        it(`Item #${index + 1} - Should display recipe title as ${ expectedRecipeItem.title }`, () => {
          expect(recipeItem.title).toEqual(expectedRecipeItem.title);
        });

        it(`Item #${index + 1} - Should display description title as ${ expectedRecipeItem.description }`, () => {
          expect(recipeItem.description).toEqual(expectedRecipeItem.description);
        });

        it(`Item #${index + 1} - Should display image ${ expectedRecipeItem.image }`, () => {
          expect(recipeItem.image).toContain(expectedRecipeItem.image);
        });

      });

    });

    describe('When click on the Recipe Item from the list', () => {

      let allRecipeItemElements: WebElement[] = [];
      beforeAll(() => {
        page.allRecipeItems.then((items) => {
          allRecipeItemElements = items;
        });

      });

      Expected.Recipes.forEach((expectedRecipeItem, index) => {

        let recipeItem: RecipeItem;
        let recipeSelectedElement: WebElement;

        beforeAll(() => {
          recipeItem = allRecipeItems[index];
          recipeSelectedElement = allRecipeItemElements[index];
        });

        it(`Item #${index + 1} - Should display recipe title as ${ expectedRecipeItem.title }`, () => {
          recipeSelectedElement.click();
          expect(page.recipeDetailTitle).toEqual(expectedRecipeItem.title);
        });

        it(`Item #${index + 1} - Should display recipe description
         for ${ expectedRecipeItem.title } as ${ expectedRecipeItem.description }`, () => {
          recipeSelectedElement.click();
          expect(page.recipeDetailDescription).toEqual(expectedRecipeItem.description);
        });

        it(`Item #${index + 1} - Should display recipe for ${ expectedRecipeItem.title } Image as ${ expectedRecipeItem.image }`, () => {
          recipeSelectedElement.click();
          expect(page.recipeDetailImage).toContain(expectedRecipeItem.image);
        });

        it(`Item #${index + 1} - Should display Action Button for ${ expectedRecipeItem.title } as "Manage Recipes"`, () => {
          recipeSelectedElement.click();
          expect(page.recipeDetailManageActionText).toEqual('Manage Recipes');
        });


        it(`Item #${index + 1} - Should display recipe ingredient
        for ${ expectedRecipeItem.title } as ${ expectedRecipeItem.ingredients }`, () => {

          recipeSelectedElement.click();
          page.recipeDetailIngredients.each((ingredientElement, indexIngredient) => {
            expect(ingredientElement.getText()).toEqual(expectedRecipeItem.ingredients[indexIngredient]);
          });

        });

        it(`Item #${index + 1} - Should display recipe ingredient
        for ${ expectedRecipeItem.title } as ${ Expected.Actions }`, () => {
          recipeSelectedElement.click();

          page.recipeDetailManageAction.click();

          page.recipeDetailManageActionOptions.each((elementAction, indexAction) => {

            elementAction.getAttribute('textContent').then((actionText) => {

              expect(actionText).toEqual(Expected.Actions[indexAction]);

            });

          });
        });

      });

    });

  });

  describe('When a recipe is added to the shopping list', () => {

    let totalNumberOfIngredients = 0;

    beforeAll(() => {
      page.firstRecipeItem.click();
      page.recipeDetailAddToShoppingListAction.click();
      page.shoppingListItems.count().then((number) => {
        totalNumberOfIngredients = number;
      });
    });

    it('Should active/highlighted link text be "Shopping List" on the banner/navigation header', () => {
      expect(page.bannerActiveLinkText).toEqual('Shopping List');
    });

    it('Should display name input field', () => {
      expect(page.shoppingListNameLabel.isDisplayed()).toBeTruthy();
      expect(page.shoppingListNameLabel.getText()).toContain('Name');
    });

    it('Should display amount input field', () => {
      expect(page.shoppingListAmountLabel.isDisplayed()).toBeTruthy();
      expect(page.shoppingListAmountLabel.getText()).toContain('Amount');
    });

    it('Should "Add" Button is disabled', () => {
      expect(page.shoppingListPositiveButton.getAttribute('disabled')).toBeTruthy();
    });

    it('Should "Clear" Button is enabled', () => {
      expect(page.shoppingListClearButton.isEnabled()).toBeTruthy();
    });

    it('Should display the ingredients of the selected recipe', () => {
      expect(page.shoppingListItems.count()).toBeGreaterThan(0);
      expect(totalNumberOfIngredients).toBeGreaterThan(0);
    });

    describe('When a ingredient from the shopping list is selected', () => {

      let shoppingListItemText: string;
      let matches: RegExpExecArray;
      const regExp: RegExp = /\(([^)]+)\)/;

      const updatedIngredientName = 'Chicken Quarter';
      const updatedIngredientAmount = '1';

      beforeAll(() => {
        page.shoppingListItem.click();

        page.shoppingListItem.getText().then((text) => {
          shoppingListItemText = text;
          matches = regExp.exec(shoppingListItemText);
        });

      });

      it('Should display the selected ingredient name in name input control', () => {
        const expectedText = shoppingListItemText.replace(matches[0], '').trim();
        expect(page.shoppingListNameInputControl.getAttribute('value')).toEqual(expectedText);

      });

      it('Should display the selected ingredient Amount in number input control', () => {
        const expectedText = matches[1].trim();
        expect(page.shoppingListAmountInputControl.getAttribute('value')).toEqual(expectedText);
      });


      it('Should display update and delete button', () => {

        expect(page.shoppingListPositiveButton.getText()).toEqual('Update');
        expect(page.shoppingListPositiveButton.isDisplayed()).toBeTruthy();

        expect(page.shoppingListNegativeButton.getText()).toEqual('Delete');
        expect(page.shoppingListNegativeButton.isDisplayed()).toBeTruthy();

      });


      describe('When the selected ingredient\'s name/amount is updated', () => {

        it('Should update the list with the new value of the ingredient', () => {

          page.shoppingListNameInputControl.clear();
          page.shoppingListAmountInputControl.clear();

          page.shoppingListNameInputControl.sendKeys(updatedIngredientName);
          page.shoppingListAmountInputControl.sendKeys(updatedIngredientAmount);


        });

        it('Should update the list with the new edited value of the ingredient', () => {

          page.shoppingListPositiveButton.click();

          page.shoppingListItem.getText().then((text) => {

            const expectedUpdatedText = `${updatedIngredientName} (${updatedIngredientAmount})`;

            expect(text).toEqual(expectedUpdatedText);

          });

        });


      });

      describe('When the clear button is clicked upon elected ingredient\'s name/amount', () => {
        it('Should clear the value from the name and amount input control', () => {

          page.shoppingListItem.click();
          page.shoppingListClearButton.click();

          expect(page.shoppingListNameInputControl.getAttribute('value')).toEqual('');
          expect(page.shoppingListAmountInputControl.getAttribute('value')).toEqual('');

        });
      });

      describe('When the selected ingredient\'s name/amount is deleted', () => {

        it('Should remove the ingredient from the list', () => {

          page.shoppingListItem.click();
          page.shoppingListNegativeButton.click();

          expect(page.shoppingListItems.count()).toEqual(totalNumberOfIngredients - 1);

        });

      });

    });

  });

});
