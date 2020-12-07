import { Router, Request, Response } from 'express';

import { login_get, login_post, register_get, register_post } from '../controllers/authController';
const route = Router();

route.get('/register', register_get);
route.post('/register', register_post);
route.get('/login', login_get);
route.post('/login', login_post);

module.exports = route;
