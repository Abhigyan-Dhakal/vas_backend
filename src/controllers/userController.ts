import { NextFunction, Request, Response } from "express";
import * as userService from "../services/userService";

/**
 * Create a user.
 * @param {Request} req
 * @param {Response} res
 */

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const {
    first_name,
    last_name,
    dob,
    ethnicity,
    gender,
    email,
    password,
    street,
    city,
    state,
  } = req.body;

  userService
    .createUser({
      first_name,
      last_name,
      dob,
      ethnicity,
      gender,
      email,
      password,
      street,
      city,
      state,
    })
    .then((data) => res.json(data))
    .catch((err) => {
      next(err);
    });
};
