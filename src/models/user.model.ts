import { prop, Typegoose } from 'typegoose';
import isEmail from 'validator/lib/isEmail';

class User extends Typegoose {
  @prop({ required: true })
  name?: string;

  @prop({ required: false })
  surname?: string;

  @prop({
    required: true,
    trim: true,
    validate: {
      validator: (e) => {
        return new Promise((resolve, reject) => {
          if (isEmail(e) === true) {
            resolve(true);
          } else {
            reject({ msg: 'Incorrect email format' });
          }
        });
      },
      message: 'Mongoose Error incorrect email',
    },
  })
  email?: string;

  @prop({ required: false, minlength: 8 })
  password?: string;
}

class Staff extends User {
  @prop({ required: true })
  code?: string;

  @prop({ required: true })
  schedule?: Record<string, unknown>;
}

export const userSchema = new User().getModelForClass(User);
export const staffSchema = new Staff().getModelForClass(Staff);
