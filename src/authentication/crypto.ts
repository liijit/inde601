import * as crypto from 'crypto';
import bcrypt from 'bcrypt';

import { ICrypto } from '../interfaces';

export class stringEncrypt {
  algorithm = process.env.ALGORITHM!;
  sKey = process.env.EKEY!;
  iv = crypto.randomBytes(16)!;

  encrypt = (e: string) => {
    const cipher = crypto.createCipheriv(this.algorithm, this.sKey, this.iv);
    const encryption = Buffer.concat([cipher.update(e), cipher.final()]);
    return {
      iv: this.iv.toString('hex'),
      data: encryption.toString('hex'),
    };
  };

  decrypt = (e: ICrypto) => {
    const decipher = crypto.createDecipheriv(this.algorithm, this.sKey, Buffer.from(e.iv, 'hex'));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(e.data, 'hex'))]);
    return decrypted.toString();
  };
}
