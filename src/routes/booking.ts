import { Router, Request, Response } from 'express';
import { Account, Verify, Register } from '../authentication/account';

import { scheduleSchema } from '../models/schedule.model';

import { ISchedule } from '../interfaces';

const route = Router();

route.post('/booking', async (req: Request, res: Response) => {
  const data: ISchedule = req.body;
  const account = new scheduleSchema({ date: data.date, account: data.account });
  account
    .save()
    .then(() => res.json({ msg: 'Date registered to user' }))
    .catch((err) => console.log(err));
});
