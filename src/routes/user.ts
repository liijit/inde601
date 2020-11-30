import { Router, Request, Response } from 'express';
import { Account, Verify, Register } from '../authentication/account';

import { userSchema } from '../models/user.model';

import { Iregister } from '../interfaces';

const route = Router();

route.post('/register', async (req: Request, res: Response) => {
  const data: Iregister = req.body;
  const Acc = new Register(data.email, data.password);
  // Acc.dbEmailLookup()
  // Acc.emailCheck()
  // Acc.passwordHash()
  const account = new userSchema({ name: data.name, email: data.email, password: data.password });
  account
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
