import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class RecipeType {
  @Field(() => ID)
  readonly id: String;
  @Field()
  readonly title: String;
  @Field()
  readonly link: String;
  @Field()
  readonly ingredients: [String];
  @Field()
  readonly instructions: String;
}
