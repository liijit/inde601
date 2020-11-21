export interface IVerify {
	nhsNo: string;
	email: string;
}

export interface InhsCheck {
	no: number;
}

export interface InhsPost {
	nhsid: string;
}

export interface IBcrypt {
	salt: string;
}

export interface Iregister {
	username: string;
	email: string;
	password: string;
}