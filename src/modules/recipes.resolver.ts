import { ResolveProperty } from "@nestjs/graphql";

@Resolver(of => Recipe)
export class RecipesResolver {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly ingredientsService: IngredientsService,
  ) {}

  @Query(returns => Recipe)
  async recipe(@Args({item: 'string'})) {
    return await this.recipesService.findOneByName(item);
  }

  @ResolveProperty()
  async posts(@Parent() author) {
    const { ingredient } = ingredient;
    return await this.ingredientsService.findAll({ingredient});
  }
}
