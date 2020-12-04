import { prop, Typegoose } from 'typegoose';

class Nhsid extends Typegoose {
  @prop({ required: false, minlength: 11, maxlength: 12 })
  nhsid?: string;
}

export const nhsidSchema = new Nhsid().getModelForClass(Nhsid);
