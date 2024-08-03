import { Field, InputType } from "type-graphql";

@InputType()
export class RecipeInput {
  @Field()
  readonly title: String;
  @Field()
  readonly link: String;
  @Field()
  readonly ingredients: [String];
  @Field()
  readonly instructions: String;
}

