import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  surname: string;
  @Prop()
  age: number;
  @Prop()
  email: string;
}

export const userSchema = SchemaFactory.createForClass(User);
