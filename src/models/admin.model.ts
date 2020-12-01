import { prop, Typegoose } from 'typegoose';

// @modelOptions({ schemaOptions: { collection: 'nhsList' } })
class NHSid extends Typegoose {
  @prop({ required: false, minlength: 11, maxlength: 12 })
  nhsid?: string;
}

export const nhsCreationSchema = new NHSid().getModelForClass(NHSid);
