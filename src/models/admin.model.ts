import { Schema, Model } from 'mongoose'
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

class NHSid extends Typegoose {
	@prop({ required: false, minlength: 6, maxlength: 12 })
	nhsid?: number;
}

export const nhsCreationSchema = new NHSid().getModelForClass(NHSid);