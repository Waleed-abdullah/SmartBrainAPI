import express, { json } from 'express';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';
import handleRegister from './controllers/register.js';
import signinAuthentication from './controllers/signin.js';
import {
  handleProfileGet,
  handleProfileUpdate,
} from './controllers/profile.js';
import { handleImage, handleApiCall } from './controllers/image.js';
import 'dotenv/config';
import morgan from 'morgan';
import requireAuth from './controllers/authorization.js';

const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI,
});

const app = express();

app.use(json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.json('success');
});

app.post('/signin', signinAuthentication(db, bcrypt));

app.post('/register', (req, res) => {
  handleRegister(req, res, db, bcrypt);
});

app.post('/profile/:id', requireAuth, (req, res) => {
  handleProfileUpdate(req, res, db);
});

app.get('/profile/:id', requireAuth, (req, res) => {
  handleProfileGet(req, res, db);
});

app.put('/image', requireAuth, (req, res) => {
  handleImage(req, res, db);
});

app.post('/imageurl', requireAuth, (req, res) => {
  handleApiCall(req, res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `app is running on port ${process.env.PORT ? process.env.PORT : 3000}`
  );
});
