import { Router, Request, Response } from 'express';
import { auth, resUser, isLogin } from '../middleware/auth';
import {
  register_get,
  register_post,
  home_get,
  faq_get,
  login_get,
  login_post,
  logout_get,
  menu_get,
  menu_post,
  settings_get,
} from '../controllers/authController';

const route = Router();

route.get('*', resUser);
route.get('/register', register_get);
route.post('/register', register_post);
route.get('/', home_get);
route.get('/faq', faq_get);
route.post('/', login_post);
route.get('/login', login_get);
route.post('/login', login_post);
route.get('/logout', auth, logout_get);
route.get('/menu', auth, menu_get);
route.post('/menu', menu_post);
route.get('/settings', auth, settings_get);

module.exports = route;
