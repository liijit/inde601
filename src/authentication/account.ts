import bcrypt from "bcrypt";
import isEmail from "validator/lib/isEmail";
import isNumeric from "validator/lib/isNumeric";

import { IVerify } from "../interfaces";

import { userSchema } from "../models/user.model";

export class Account implements IVerify {
	email: string;
	password: string;

	constructor(email: string, password: string) {
		this.email = email;
		this.password = password;
	}
}

export class Verify extends Account implements IVerify {
	nhsCheck = (e: string) => {
		return new Promise((resolve, reject) => {
			if (isNumeric(e) === true) {
				resolve(true)
			} else {
				reject({ msg: "Number isn't numeric" });
			}
		});
	}

	emailCheck = () => {
		return new Promise((resolve, reject) => {
			if(isEmail(this.email) === true) {
				resolve(true)
			} else {
				console.log(isEmail(this.email))
				reject({ msg: "Incorrect email format" })
			}
			})
		}
}

export class Register extends Verify implements IVerify {
	passwordHash = () => {
		const salt: any = bcrypt.genSalt(10, function (err, salt){
			return salt;
		})
		return (bcrypt.hash(this.password, salt).then((res) => {
			return res;
		}));
	};
}