import { Args, Mutation, Query, ResolveProperty, Resolver } from "@nestjs/graphql";
import { RecipeInput } from "src/inputs/recipe.input";
import { RecipesService } from "src/services/recipes.service";
import { RecipeType } from "src/types/recipe.type";

@Resolver()
export class RecipesResolver {
  constructor(
    private readonly recipesService: RecipesService,
  ) {}

  @Query(() => String)
  async helloWorld() {
    return 'hello world';
  }

  @Query(() => [RecipeType])
  async Recipe() {
    return this.recipesService.findAll();
  }

  @Mutation(() => RecipeType)
  async createRecipe(@Args('input') input: RecipeInput) {
    return this.recipesService.create(input);
  }

}
