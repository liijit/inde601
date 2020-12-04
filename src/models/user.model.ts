import { prop, Typegoose } from 'typegoose';
import isEmail from 'validator/lib/isEmail';

class User extends Typegoose {
  @prop({ required: true })
  name?: string;

  @prop({ required: false })
  surname?: string;

  @prop({ required: true, trim: true })
  email?: string;

  @prop({ required: true, minlength: 8 })
  password?: string;
}

class Slot extends Typegoose {
  @prop({ required: true })
  userid?: string;

  @prop({ required: true })
  slot?: Date;
}

export const userSchema = new User().getModelForClass(User);
export const slotSchema = new Slot().getModelForClass(Slot, {
  schemaOptions: { timestamps: { createdAt: 'creationAt', updatedAt: 'UpdatesAt' } },
});
