import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

const app: express.Application = express();

const uri = process.env.MONGOCOMPASS_URI || process.env.MONGOATLAS_URI;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

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
