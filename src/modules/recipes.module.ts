import { Module } from '@nestjs/common';
import { RecipesResolver } from '../resolvers/recipes.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeSchema } from 'src/schema/recipe.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Recipe', schema: RecipeSchema}])],
  providers: [RecipesResolver],
})
export class RecipesModule {}
