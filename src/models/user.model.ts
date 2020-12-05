import { prop, Typegoose } from 'typegoose';
import isEmail from 'validator/lib/isEmail';

class User extends Typegoose {
  @prop({
    required: true,
    validate: {
      validator: (e) => {
        const result = RegExp.prototype[Symbol.match].call(/^[a-zA-Z\s]+$/, e);
        if (result) {
          return true;
        } else {
          return false;
        }
      },
      message: '{VALUE} is not valid',
    },
  })
  name?: string;

  @prop({
    required: false,
    validate: {
      validator: (e) => {
        const result = RegExp.prototype[Symbol.match].call(/^[a-zA-Z\s]+$/, e);
        if (e === '') {
          return true;
        } else if (result) {
          return true;
        } else {
          return false;
        }
      },
      message: '{VALUE} is not valid',
    },
  })
  surname?: string;

  @prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [
      {
        validator: (e) => {
          const result = RegExp.prototype[Symbol.match].call(/\S+@\S+\.\S+/, e);
          if (result) {
            return true;
          } else {
            return false;
          }
        },
        message: '{VALUE} is not valid',
      },
    ],
  })
  email?: string;

  @prop({
    required: true,
    validate: [
      {
        validator: (e) => {
          return e.length > 6;
        },
        message: 'Password must include more than 6 characters',
      },
      {
        validator: (e) => {
          const result = RegExp.prototype[Symbol.match].call(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/,
            e,
          );
          if (result) {
            return true;
          } else {
            return false;
          }
        },
        message: 'Password must include 1 capital and 1 special character',
      },
    ],
  })
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
