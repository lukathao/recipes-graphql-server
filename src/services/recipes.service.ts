import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RecipeInput } from "src/inputs/recipe.input";
import { Recipe } from "src/interfaces/recipe.interface";

@Injectable()
export class RecipesService {
  constructor(@InjectModel('Recipe') private readonly recipeModel: Model<Recipe>) {}

  async create(recipeInput: RecipeInput): Promise<Recipe> {
    const createdRecipe = new this.recipeModel(recipeInput);
    return await createdRecipe.save();
  }

  async findAll(): Promise<Recipe[]> {
    return await this.recipeModel.find().exec();
  }
}

