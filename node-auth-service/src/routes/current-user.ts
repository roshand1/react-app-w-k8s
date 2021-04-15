import express from 'express';
import { getRequest } from '../middleware/get-request';

const router = express.Router();

router.get('/users/currentuser', getRequest, (req, res) => {
  res.send('User found');
});

export { router as currentUserRouter };
