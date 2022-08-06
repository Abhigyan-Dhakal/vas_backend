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
    insurance_id,
    member_id,
    insurance_provider,
    document,
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
      insurance_id,
      member_id,
      insurance_provider,
      document,
    })
    .then((data) => res.json(data))
    .catch((err) => {
      next(err);
    });
};
