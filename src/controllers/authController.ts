import { Request, Response } from 'express';
import { Register, Verify } from '../authentication/account';

import { userSchema } from '../models/user.model';

export function login_get(req: Request, res: Response) {
  res.render('login');
}

export function register_get(req: Request, res: Response) {
  res.render('register');
}

export function register_post(req: Request, res: Response) {
  const { name, surname, email, password } = req.body;
  const account = new Register(name, surname, email, password);
  const arrs = [];
  const map = new Map();
  map.set(account.emailCheck(), 1);
  Promise.all(map)
    .then(async (result) => {
      const hash = await account.pwHash();
      const accountDB = new userSchema({
        name: account.name,
        surname: account.surname,
        email: account.email,
        password: hash,
      });
      accountDB
        .save()
        .then((result) => {
          console.log('Account saved');
        })
        .catch((error) => {
          console.log(error);
          console.log(error.properties);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function login_post(req: Request, res: Response) {
  res.send('login');
}
