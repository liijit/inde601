import { Router, Request, Response } from 'express';
import { Verify } from '../authentication/verify'

import { InhsPost } from '../interfaces'

import { nhsCreationSchema } from '../models/admin.model'

const route = Router();

route.post("/admin/add/nhs", (req: Request, res: Response) => {
	const data: InhsPost = req.body
	let account = new nhsCreationSchema ({ nhsid: data.nhsid });
	console.log(data)
	console.log(account)
	account.save()
		.then(() => res.json({ msg: 'Nhs No. Registered'}))
		.catch(err => console.log(err))
})

module.exports = route;