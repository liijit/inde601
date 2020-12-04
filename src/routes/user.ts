import { Router, Request, Response } from 'express';
import { Register, Verify } from '../authentication/account';

import { userSchema } from '../models/user.model';

import { IRegister } from '../interfaces';

const route = Router();

route.post('/register', async (req: Request, res: Response) => {
  const data: IRegister = req.body;
  const account = new Register(data.name, data.surname, data.email, data.password);
  const arrs = [];
  const map = new Map();
  map.set(account.emailCheck(), 1);
  Promise.all(map)
    .then(async (result) => {
      const hash = await account.pwHash();
      console.log(hash);
      const accountDB = new userSchema({ name: account.name, surname: account.surname, email: account.email, password: hash });
      accountDB
        .save()
        .then((result) => {
          console.log('details saved');
        })
        .catch((error) => {
          console.log(error);
          console.log(error.properties);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = route;
