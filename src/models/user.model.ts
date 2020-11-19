import { Schema, Model } from 'mongoose'
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

class User extends Typegoose {
	@prop({ required: false })
	username?: string;

	@prop({ required: false, trim: true })
	email?: string;

	@prop({ required: false, minlength: 8 })
	password?: string;

	@prop({ required: false, minlength: 1, maxlength: 12 })
	nhsid?: string;
}

export const userSchema = new User().getModelForClass(User);