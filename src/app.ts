import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { stringEncrypt } from './authentication/crypto';
import { Verify } from './authentication/account'

const app: express.Application = express();

const uri = process.env.MONGOCOMPASS_URI || process.env.MONGOATLAS_URI;

app.get('/', (req, res) => {
	res.send('Example text')
});

app.use(express.json());
app.use(cors());

const user = require('./routes/user')
const admin = require('./routes/admin')

app.use('/', user)
app.use('/', admin)

app.listen(process.env.PORT, () => {
    console.log(`Listening @ ${process.env.PORT}`);
    let a = new stringEncrypt;
    let e = a.encrypt('aaf')

    console.log(e.iv+' '+ e.data)
    let decryptedData = a.decrypt(e);
    console.log(decryptedData)
    const foo = new Verify("2423423",'jit43000@gmail.com')
    foo.emailCheck().catch((e) => {
    	console.log(e)
    })
})

mongoose.connect(uri!, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            throw err.message
            process.exit(1);
        }
        console.log("MongoDB database connection established successfully");
    }
);