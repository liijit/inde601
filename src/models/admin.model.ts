import { prop, getModelForClass } from '@typegoose/typegoose';

class Nhsid {
  @prop({ required: false, minlength: 11, maxlength: 12 })
  nhsid?: string;
}

export const nhsidSchema = getModelForClass(Nhsid);
