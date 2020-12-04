import { prop, Typegoose } from 'typegoose';

class NhsidCreate extends Typegoose {
  @prop({ required: false, minlength: 11, maxlength: 12 })
  nhsid?: string;
}

export const nhsidSchema = new NhsidCreate().getModelForClass(NhsidCreate);
