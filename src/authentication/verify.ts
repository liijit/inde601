import bcrypt from "bcrypt";
import isEmail from "validator/lib/isEmail";
import isNumeric from "validator/lib/isNumeric";

import { IVerify } from "../interfaces";

import { userSchema } from "../models/user.model";

export class Verify implements IVerify {
	nhsNo: string;
	email: string;

	constructor(nhsNo: string, email: string) {
		this.nhsNo = nhsNo;
		this.email = email;
	}

	nhsCheck() {
		return new Promise((resolve, reject) => {
			if (isNumeric(this.nhsNo) === true) {
				resolve(true)
			} else {
				reject({ msg: "Number isn't numeric" });
			}
		});
	}

	emailCheck() {
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

export class Register {
	constructor() {}
}