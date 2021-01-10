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

  if (err.message.includes('Incorrect email')) {
    errors.email = 'Invalid email';
  }

  if (err.message.includes('Incorrect password')) {
    errors.password = 'Invalid password';
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

export function home_get(req: Request, res: Response) {
  res.render('landingpage');
}

export function faq_get(req: Request, res: Response) {
  res.render('faq');
}

export function register_get(req: Request, res: Response) {
  res.render('register');
}

export function menu_get(req: Request, res: Response) {
  res.render('menu');
}

export function settings_get(req: Request, res: Response) {
  res.render('settings');
}

export function logout_get(req: Request, res: Response) {
  res.cookie('jwt', '', { maxAge: 0 });
  res.redirect('/');
  console.log('test');
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
          res.redirect('/menu');
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

export async function login_post(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await userSchema.login(email, password);
    const token = generateToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (error) {
    const errors = handleErrors(error);
    return res.status(400).json({ errors });
  }
}
