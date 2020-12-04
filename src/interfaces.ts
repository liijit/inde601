export interface IVerify {
  email: string;
  password: string;
}

export interface INhsCheck {
  no: number;
}

export interface INhs {
  nhsid: string;
}

export interface IBcrypt {
  salt: string;
}

export interface ICrypto {
  iv: string;
  data: any;
}

export interface IRegister {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ISession {
  userid: string;
  slot: Date;
}

export interface IStaffKey {
  key: string;
}
