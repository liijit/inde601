import { Request, Response } from 'express';

export function login_get(req: Request, res: Response) {
  res.render('login');
}

export function register_get(req: Request, res: Response) {
  res.render('register');
}

export function register_post(req: Request, res: Response) {
  res.send('register');
}

export function login_post(req: Request, res: Response) {
  res.send('login');
}
