import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';

const app: express.Application = express();
const corsS = cors();

const uri = process.env.MONGOCOMPASS_URI || process.env.MONGOATLAS_URI;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());
// app.use(corsS);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const admin = require('./routes/admin');
const authRoutes = require('./routes/authRoutes');

app.use(admin);
app.use(authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening @ ${process.env.PORT}`);
});

mongoose.connect(uri!, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    throw err.message;
    process.exit(1);
  }
  console.log('MongoDB database connection established successfully');
});

app.get('/', (req, res) => {
  res.send('Example text');
});
