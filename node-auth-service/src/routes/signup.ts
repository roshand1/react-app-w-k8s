import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validateRequest, BadRequestError } from '@sgtickets/common';

import { User } from '../models/user';

const router = express.Router();

router.post(
  '/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid.'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters.'),
    body('legacyId')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Must have legacy id.'),
    body('role')
      .trim()
      .isIn(['admin', 'role'])
      .withMessage(
        'Attempting to assign an invalid role. Role can be either "admin" or "user".'
      ),
    body('firstName').trim(),
    body('lastName').trim()
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password, role, legacyId, firstName, lastName } = req.body;

    const existingUser = await User.findOne({ email });
    const existingLegacyId = await User.findOne({ legacyId });

    if (existingUser) {
      throw new BadRequestError('Email is in use.');
    }

    if (existingLegacyId) {
      throw new BadRequestError('Legacy id is in use.');
    }

    const user = User.build({
      email,
      password,
      role,
      legacyId,
      firstName,
      lastName
    });
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        legacyId: user.legacyId,
        firstName: user.firstName,
        lastName: user.lastName
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
