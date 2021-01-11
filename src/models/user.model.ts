import { prop, pre, post, ReturnModelType, getModelForClass } from '@typegoose/typegoose';
import { model, Schema, Model, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import isEmail from 'validator/lib/isEmail';

import { nhsSchema } from './nhs.model';

@pre<User>('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  const nhsno = await nhsSchema.updateOne({ no: this.nhsno }, { user: this._id });
})
class User {
  @prop({
    required: true,
    validate: {
      validator: async (e) => {
        const nhsno = await nhsSchema.findOne({ no: e }, (err, obj: { user: string }) => {
          return obj;
        });
        if (nhsno === null || nhsno === undefined) {
          return false;
        } else if (nhsno.user) {
          return false;
        } else {
          return true;
        }
      },
      message: '"{VALUE}" not been registered',
    },
  })
  nhsno?: number;

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
      message: 'Name should only contain letters',
    },
  })
  name?: string;

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
        message: '"{VALUE}" is not valid',
      },
    ],
  })
  email?: string;

  @prop({
    required: true,
    validate: [
      {
        validator: (e) => {
          // console.log(e.length);
          return e.length >= 6;
        },
        message: 'Password must include more than 6 characters',
      },
    ],
  })
  password?: string;

  public static async login(this: ReturnModelType<typeof User>, email: string, password: string) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password!);
      if (auth) {
        return user;
      }
      throw Error('Incorrect password');
    }
    throw Error('Incorrect email');
  }
}

class Slot {
  @prop({ required: true })
  userid?: string;

  @prop({ required: true })
  slot?: Date;
}

export const userSchema = getModelForClass(User);
export const slotSchema = getModelForClass(Slot, {
  schemaOptions: { timestamps: { createdAt: 'creationAt', updatedAt: 'UpdatesAt' } },
});
