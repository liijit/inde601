import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { userSchema } from '../models/user.model';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  if (token) {
    //Recreate original signature based on the headers, payload and the secret
    const verified = jwt.verify(token, process.env.JWT_SECRET!);
    if (!verified) {
      console.log(verified);
      return res.redirect('/login');
    } else {
      next();
    }
  } else {
    return res.redirect('/login');
  }
};

export const resUser = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  if (token) {
    const verified: any = jwt.verify(token, process.env.JWT_SECRET!);
    if (!verified) {
      res.locals.user = null;
      next();
    } else {
      const user = await userSchema.findById(verified.id);
      res.locals.user = user;
      next();
    }
  } else {
    res.locals.user = null;
    next();
  }
};

export const isLogin = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  if (token) {
    const verified: any = jwt.verify(token, process.env.JWT_SECRET!);
    if (!verified) {
      res.cookie('jwt', '', { maxAge: 1 });
      res.redirect('/login');
      next();
    } else {
      res.redirect('menu');
      next();
    }
  } else {
    return res.redirect('/login');
  }
};
