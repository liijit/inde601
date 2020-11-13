import { Schema } from 'mongoose'

const Schemas = Schema{
	username: {
	  type: String,
	  required: true,
	  trim: true,
	  minlength: 3,
	},
	email: {
	  type: String,
	  required: true,
	  trim: true,
	},
	password: {
	  type: String,
	  required: true,
	  minlength: 6
	},
	nhsid: {
		type: String,
		required: true,
		minlength: 12
	}
},

{
	timestamps: true,
});
