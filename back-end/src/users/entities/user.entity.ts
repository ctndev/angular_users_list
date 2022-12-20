import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { _dob, _id, _location, _login, _name, _picture, _registered } from 'src/model/user.model';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  @Prop({type: Object})
  name: {
    title: string;
    first: string;
    last: string;
  }

  @Prop()
  gender: string;

  @Prop({type: Object})
  location: _location;

  @Prop()
  email: string;

  @Prop({type: Object})
  login: _login;

  @Prop({type: Object})
  dob: _dob;

  @Prop({type: Object})
  registered: _registered;

  @Prop()
  phone: string;

  @Prop()
  cel: string;

  @Prop({type: Object})
  id: _id;

  @Prop({type: Object})
  picture: _picture;

  @Prop()
  nat: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
