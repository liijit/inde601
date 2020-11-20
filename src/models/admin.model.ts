import { Schema, Model } from 'mongoose'
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import typegoose from 'typegoose';

class NHSid extends Typegoose {
	@prop({ required: false, minlength: 11, maxlength: 12 })
	nhsid?: string;
}

export const nhsCreationSchema = new NHSid().getModelForClass(NHSid);
