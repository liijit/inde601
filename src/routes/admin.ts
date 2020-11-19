import { Router, Request, Response } from 'express';
import { Verify } from '../authentication/verify'

import { InhsPost } from '../interfaces'

import { nhsCreationSchema } from '../models/admin.model'

// import * as jsonD from '../db/nhsTemp.json'

const route = Router();

route.post("/admin/add/nhs", (req: Request, res: Response) => {
	const data: InhsPost = req.body
	let account = new nhsCreationSchema ({ nhsNo: data });
	account.save()
		.then(() => res.json({ msg: 'Nhs No. Registered'}))
		.catch(err => console.log(err))
})

module.exports = route;