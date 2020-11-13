import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { stringEncryption } from './authentication/crypto';

const app: express.Application = express();

const uri = process.env.MONGOCOMPASS_URI || process.env.MONGOATLAS_URI;

app.get('/', (req, res) => {
	res.send('Example text')
});

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Listening @ ${process.env.PORT}`);
    let a = new stringEncryption;
    let e = a.encrypt('aaf')

    console.log(e.iv+' '+ e.data)
    let decryptedData = a.decrypt(e);
    console.log(decryptedData)
    // console.log(process.env.ALGORITHM,process.env.IV, process.env.EKEY)
})