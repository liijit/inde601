import { Router, Request, Response } from 'express';
import { Verify } from '../authentication/account';

import { INhs, IStaffKey } from '../interfaces';

import { nhsidSchema } from '../models/admin.model';

const route = Router();

route.post('/admin/add/nhs', (req: Request, res: Response) => {
  const data: INhs = req.body;
  const account = new nhsidSchema({ nhsid: data.nhsid });
  account
    .save()
    .then(() => res.json({ msg: 'Nhs No. Registered' }))
    .catch((err) => console.log(err));
});

module.exports = route;
