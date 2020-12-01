export interface IVerify {
  email: string;
  password: string;
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
  name: string;
  email: string;
  password: string;
}

export interface ISchedule {
  date: Date;
  account: string;
}
