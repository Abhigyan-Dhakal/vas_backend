import { NextFunction, Request, Response } from "express";
import * as vaccineService from "../services/vaccineService";

export const addVaccine = (req: Request, res: Response, next: NextFunction) => {
  const {
    service_name,
    site_location,
    start_date,
    end_date,
    dose_type,
    duration,
    gender,
    age,
    ethnicity,
  } = req.body;

  vaccineService
    .addVaccine({
      service_name,
      site_location,
      start_date,
      end_date,
      dose_type,
      duration,
      gender,
      age,
      ethnicity,
    })
    .then((data) => res.json(data))
    .catch((err) => {
      next(err);
    });
};

export const getAllVaccines = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  vaccineService
    .getAllVaccines()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};

export const getVaccine = (req: Request, res: Response, next: NextFunction) => {
  const { vaccineId } = req.params;
  vaccineService
    .getVaccine(+vaccineId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};

export const updateVaccine = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { vaccineId } = req.params;
  const {
    service_name,
    site_location,
    start_date,
    end_date,
    dose_type,
    duration,
    gender,
    age,
    ethnicity,
  } = req.body;
  vaccineService
    .updateVaccine({
      vaccine_id: +vaccineId,
      service_name,
      site_location,
      start_date,
      end_date,
      dose_type,
      duration,
      gender,
      age,
      ethnicity,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};

export const deleteVaccine = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { vaccineId } = req.params;

  vaccineService
    .deleteVaccine(+vaccineId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
};
