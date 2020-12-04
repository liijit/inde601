import { Router, Request, Response } from 'express';
import { Register, Verify } from '../authentication/account';

import { userSchema } from '../models/user.model';

import { IRegister } from '../interfaces';

const route = Router();

route.post('/register', async (req: Request, res: Response) => {
  const data: IRegister = req.body;
  const account = new Register(data.name, data.surname, data.email, data.password);
  account.pwHash();
  const accountDB = new userSchema({ name: account.name, email: account.email, password: account.password });
  accountDB
    .save()
    .then((result) => {
      console.log('details saved');
    })
    .catch((error) => {
      console.log(error);
      console.log(error.properties);
    });
});

module.exports = route;
