//import mongoose from 'mongoose';

import { app } from './app';
process.env.JWT_KEY = 'asdf';
//process.env.MONGO_URI = 'something';
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  app.listen(5000, () => {
    console.log('Listening on port 5000!!!!!!!!');
  });
};

start();
