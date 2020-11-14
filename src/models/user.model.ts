import { Schema, Model } from 'mongoose'
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

class User extends Typegoose {
	@prop({ required: true })
	username?: string;

	@prop({ required: true, trim: true })
	email?: string;

	@prop({ required: true, minlength: 8 })
	password?: string;

	@prop({ required: true, minlength: 12, maxlength: 12 });
	nhsid?: string;
}

module.exports = new User().getModelForClass(User);