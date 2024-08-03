import { Document } from 'mongoose';

export interface Recipe extends Document {
  readonly title: String;
  readonly link: String;
  readonly ingredients: [String];
  readonly instructions: String;
}
