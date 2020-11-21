import { Router, Request, Response } from 'express';
import { Verify } from '../authentication/verify'
import { passwordEncrypt } from '../authentication/crypto'

import { InhsPost } from '../interfaces'

const route = Router();

route.get("/register", (req: Request, res: Response) => {
	const data: InhsPost = req.body;
	res.send(data)
})

module.exports = route;