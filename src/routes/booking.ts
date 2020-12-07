import { Router, Request, Response } from 'express';
import { Account, Verify, Register } from '../authentication/account';

import { slotSchema } from '../models/user.model';

import { ISession } from '../interfaces';

const route = Router();

route.post('/booking', async (req: Request, res: Response) => {
  const data: ISession = req.body;
  const account = new slotSchema({ userid: data.userid, slot: data.slot });
  account
    .save()
    .then(() => res.json({ msg: 'Date registered to user' }))
    .catch((err: string) => console.log(err));
});
