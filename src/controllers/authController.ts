import { Request, Response } from 'express';
import { model, Schema, Model, Document } from 'mongoose';
import jwt from 'jsonwebtoken';
import { Register, Verify } from '../authentication/account';

import { userSchema } from '../models/user.model';
import { nhsSchema } from '../models/nhs.model';

//handler
const handleErrors = (err: { message: string; errors: string; code: number }) => {
  const errors: any = { name: '', email: '', password: '', nhsno: '' };

  if (err.code === 11000) {
    errors.email = 'Email is already registered';
    return errors;
  }

  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ message, path }: any) => {
      errors[path] = message;
    });
  }

  if (errors.nhsno.includes('Cast to Number failed for value')) {
    errors.nhsno = 'Incorrect format';
  }

  return errors;
};

const maxAge: number = 1 * 24 * 60 * 60;

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: maxAge,
  });
};

export function login_get(req: Request, res: Response) {
  res.render('login');
}

export function register_get(req: Request, res: Response) {
  res.render('register');
}

export function register_post(req: Request, res: Response) {
  const { nhsno, name, email, password } = req.body;
  const arrs = [];
  const map = new Map();
  Promise.all(map)
    .then(async (result) => {
      const user = new userSchema({
        name: name,
        email: email,
        password: password,
        nhsno: nhsno,
      });
      user
        .save()
        .then((result) => {
          const token = generateToken(user._id);
          res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          res.status(201).json({ user: user._id });
          const nhs = new nhsSchema({
            no: name,
            user: user._id,
          });
        })
        .catch((error) => {
          const errors = handleErrors(error);
          res.status(400).json({ errors });
        });
    })
    .catch((error) => {
      handleErrors(error);
    });
}

export function login_post(req: Request, res: Response) {
  res.send('login');
}
