export class RecipeItem {

  title: string;
  description: string;
  image: string;
  ingredients: string[];

  constructor()

  constructor(title?: string, description?: string, image?: string, ingredients?: string[]) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.ingredients = ingredients;
  }
}
