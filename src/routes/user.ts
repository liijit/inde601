import { Router, Request, Response } from 'express';
import { Account, Verify, Register } from '../authentication/account'

import { Iregister } from '../interfaces'

const route = Router();

route.post("/register", (req: Request, res: Response) => {
	const data: Iregister = req.body;
	const Acc = new Register('jit43000@gmail.com',"1234")
	console.log(Acc.emailCheck())
	res.send(data)
})

module.exports = route;