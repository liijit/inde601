import { Router, Request, Response } from 'express';
import { Verify } from '../authentication/verify'

import { InhsPost } from '../interfaces'

// import * as jsonD from '../db/nhsTemp.json'

const route = Router();

route.get("/register", (req: Request, res: Response) => {
	const data: InhsPost = req.body;
	res.send(data)
})

module.exports = route;