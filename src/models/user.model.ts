import { prop, Typegoose } from 'typegoose';
import isEmail from 'validator/lib/isEmail';

class UserCreate extends Typegoose {
  @prop({ required: true })
  name?: string;

  @prop({ required: false })
  surname?: string;

  @prop({ required: true, trim: true })
  email?: string;

  @prop({ required: true, minlength: 8 })
  password?: string;
}

class SlotCreate extends Typegoose {
  @prop({ required: true })
  userid?: string;

  @prop({ required: true })
  slot?: Date;
}

export const userSchema = new UserCreate().getModelForClass(UserCreate);
export const slotSchema = new SlotCreate().getModelForClass(SlotCreate, {
  schemaOptions: { timestamps: { createdAt: 'creationAt', updatedAt: 'UpdatesAt' } },
});
