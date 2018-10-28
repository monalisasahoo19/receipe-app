# Recipe Book

```

> git clone https://github.com/testcodingskill/receipe-app.git
> cd recipe-app
> npm install
> ng serve

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


Below are the E2E test scenarios are covered:

  Given the Recipe Book App is opened

    When the page title is available
      ✓ Should display the browser title as "RecipeApp"

    When the page header navigation is shown
      ✓ Should display title as "Recipe Book"
      ✓ Should display "Recipes" link
      ✓ Should display "Shopping List" link
      ✓ Should active/highlighted link text be "Recipes"

    When the page sub header section is shown
      ✓ Should display "New Recipe" Button
      ✓ Should display "New Recipe" Button is disabled
      ✓ Should display information panel with text "Please select a recipe from the list"

    When the recipes list is shown
      ✓ Should display 5 Recipes

      When Recipes with image, title and description is displayed
        ✓ Item #1 - Should display recipe title as Chinese Chicken
        ✓ Item #1 - Should display description title as Chinese Chicken with sweet and sour sauce
        ✓ Item #1 - Should display image 636d8d6cfbf1862e5ad5f89571c55430.jpg
        ✓ Item #2 - Should display recipe title as Sausage Casserole
        ✓ Item #2 - Should display description title as Sausage Casserole with onion gravy
        ✓ Item #2 - Should display image Italian-Sausage.jpg
        ✓ Item #3 - Should display recipe title as Taco Meat Recipe
        ✓ Item #3 - Should display description title as Taco with minced beef and onion
        ✓ Item #3 - Should display image taco-meat-leftovers-recipes
        ✓ Item #4 - Should display recipe title as Egg delight
        ✓ Item #4 - Should display description title as Lightly toasted wraps with fresh eggs
        ✓ Item #4 - Should display image dinner-recipes-under-300-calories
        ✓ Item #5 - Should display recipe title as Fried EggPlant
        ✓ Item #5 - Should display description title as Eggplant daked with cheese
        ✓ Item #5 - Should display image maxresdefault.jpg

      When click on the Recipe Item from the list
        ✓ Item #1 - Should display recipe title as Chinese Chicken
        ✓ Item #1 - Should display recipe description
                 for Chinese Chicken as Chinese Chicken with sweet and sour sauce
        ✓ Item #1 - Should display recipe for Chinese Chicken Image as 636d8d6cfbf1862e5ad5f89571c55430.jpg
        ✓ Item #1 - Should display Action Button for Chinese Chicken as "Manage Recipes"
        ✓ Item #1 - Should display recipe ingredient
                for Chinese Chicken as 4 Chicken Portions,1 Chinese spices
        ✓ Item #1 - Should display recipe ingredient
                for Chinese Chicken as Add to shopping List,Edit Recipe,Delete Recipe
        ✓ Item #2 - Should display recipe title as Sausage Casserole
        ✓ Item #2 - Should display recipe description
                 for Sausage Casserole as Sausage Casserole with onion gravy
        ✓ Item #2 - Should display recipe for Sausage Casserole Image as Italian-Sausage.jpg
        ✓ Item #2 - Should display Action Button for Sausage Casserole as "Manage Recipes"
        ✓ Item #2 - Should display recipe ingredient
                for Sausage Casserole as 6 Sausages,2 onions
        ✓ Item #2 - Should display recipe ingredient
                for Sausage Casserole as Add to shopping List,Edit Recipe,Delete Recipe
        ✓ Item #3 - Should display recipe title as Taco Meat Recipe
        ✓ Item #3 - Should display recipe description
                 for Taco Meat Recipe as Taco with minced beef and onion
        ✓ Item #3 - Should display recipe for Taco Meat Recipe Image as taco-meat-leftovers-recipes
        ✓ Item #3 - Should display Action Button for Taco Meat Recipe as "Manage Recipes"
        ✓ Item #3 - Should display recipe ingredient
                for Taco Meat Recipe as 2 Minced Beef,2 onions
        ✓ Item #3 - Should display recipe ingredient
                for Taco Meat Recipe as Add to shopping List,Edit Recipe,Delete Recipe
        ✓ Item #4 - Should display recipe title as Egg delight
        ✓ Item #4 - Should display recipe description
                 for Egg delight as Lightly toasted wraps with fresh eggs
        ✓ Item #4 - Should display recipe for Egg delight Image as dinner-recipes-under-300-calories
        ✓ Item #4 - Should display Action Button for Egg delight as "Manage Recipes"
        ✓ Item #4 - Should display recipe ingredient
                for Egg delight as 6 Eggs,2 Wraps,1 Cheese
        ✓ Item #4 - Should display recipe ingredient
                for Egg delight as Add to shopping List,Edit Recipe,Delete Recipe
        ✓ Item #5 - Should display recipe title as Fried EggPlant
        ✓ Item #5 - Should display recipe description
                 for Fried EggPlant as Eggplant daked with cheese
        ✓ Item #5 - Should display recipe for Fried EggPlant Image as maxresdefault.jpg
        ✓ Item #5 - Should display Action Button for Fried EggPlant as "Manage Recipes"
        ✓ Item #5 - Should display recipe ingredient
                for Fried EggPlant as 6 Aubergine,2 Cheese
        ✓ Item #5 - Should display recipe ingredient
                for Fried EggPlant as Add to shopping List,Edit Recipe,Delete Recipe

    When a recipe is added to the shopping list
      ✓ Should active/highlighted link text be "Shopping List" on the banner/navigation header
      ✓ Should display name input field
      ✓ Should display amount input field
      ✓ Should "Add" Button is disabled
      ✓ Should "Clear" Button is enabled
      ✓ Should display the ingredients of the selected recipe

      When a ingredient from the shopping list is selected
        ✓ Should display the selected ingredient name in name input control
        ✓ Should display the selected ingredient Amount in number input control
        ✓ Should display update and delete button

        When the selected ingredient's name/amount is updated
          ✓ Should update the list with the new value of the ingredient
          ✓ Should update the list with the new edited value of the ingredient

        When the clear button is clicked upon elected ingredient's name/amount
          ✓ Should clear the value from the name and amount input control

        When the selected ingredient's name/amount is deleted
          ✓ Should remove the ingredient from the list

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
