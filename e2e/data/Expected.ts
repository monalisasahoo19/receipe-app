import {RecipeItem} from '../model/RecipeItem';

export const Expected: { Recipes: RecipeItem[]; Actions: string[]; }
  = {
  Recipes: [
    {
      title: 'Chinese Chicken',
      description: 'Chinese Chicken with sweet and sour sauce',
      image: '636d8d6cfbf1862e5ad5f89571c55430.jpg',
      ingredients: ['4 Chicken Portions', '1 Chinese spices']
    },
    {
      title: 'Sausage Casserole',
      description: 'Sausage Casserole with onion gravy',
      image: 'Italian-Sausage.jpg',
      ingredients: ['6 Sausages', '2 onions']
    },
    {
      title: 'Taco Meat Recipe',
      description: 'Taco with minced beef and onion',
      image: 'taco-meat-leftovers-recipes',
      ingredients: ['2 Minced Beef', '2 onions']
    },
    {
      title: 'Egg delight',
      description: 'Lightly toasted wraps with fresh eggs',
      image: 'dinner-recipes-under-300-calories',
      ingredients: ['6 Eggs', '2 Wraps', '1 Cheese']
    },
    {
      title: 'Fried EggPlant',
      description: 'Eggplant daked with cheese',
      image: 'maxresdefault.jpg',
      ingredients: ['6 Aubergine', '2 Cheese']
    }
  ],

  Actions: ['Add to shopping List', 'Edit Recipe', 'Delete Recipe']
};

