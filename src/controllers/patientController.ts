import { NextFunction, Request, Response } from "express";
import * as patientService from "../services/patientService";

export const createPatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    first_name,
    last_name,
    dob,
    ethnicity,
    gender,
    email,
    street,
    city,
    state,
    insurance_id,
    member_id,
    insurance_provider,
    document,
  } = req.body;

  patientService
    .createPatient({
      first_name,
      last_name,
      dob,
      ethnicity,
      gender,
      email,
      street,
      city,
      state,
      insurance_id,
      member_id,
      insurance_provider,
      document,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};

export const getAllPatients = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  patientService
    .getAllPatients()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};

export const getPatient = (req: Request, res: Response, next: NextFunction) => {
  const { patientId } = req.params;
  patientService
    .getPatient(+patientId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};
