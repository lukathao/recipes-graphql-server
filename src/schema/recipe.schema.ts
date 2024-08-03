import * as mongoose from 'mongoose'

export const RecipeSchema = new mongoose.Schema({
  title: String,
  link: String,
  ingredients: [String],
  instructions: String,
});
