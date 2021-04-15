import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');
//const { jwtPrivateKey } = require('../services/jwt-private-key');

export const getRequest = async (req: Request, res: Response, next: NextFunction) => {

  // const bearerHeader = req.headers['authorization'];

  // if (typeof bearerHeader !== 'undefined') {
  //   try {
  //     const bearerToken = bearerHeader.split(' ')[1];
  //     const privateKey = await jwtPrivateKey();
  //     if (!privateKey) res.status(500).send('Something went wrong');
  //     const pem = jwkToPem(privateKey);
  //     var user = jwt.verify(bearerToken, pem);
  //     if (!user) res.status(401).send('Not Authorized');
  //   } catch (err) {
  //     if (err.name == 'TokenExpiredError') res.status(401).send('Token Expired');
  //     res.status(401).send('Not Authorized');
  //   }
  // }
  // else {
  //   res.status(401).send('Not Authorized');
  // }
  next();
};
