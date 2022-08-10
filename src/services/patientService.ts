import Patient, { PatientToInsert } from "../domain/Patient";
import Success from "../domain/Success";
import PatientModel from "../models/PatientModel";

export const createPatient = async (
  patientDetails: PatientToInsert
): Promise<Success<Patient>> => {
  const newPatient = await PatientModel.createPatient(patientDetails);

  return {
    data: newPatient,
    message: "Patient Added Successfully!",
  };
};

export const getAllPatients = async (): Promise<Success<Patient[]>> => {
  const patients = await PatientModel.getAllPatients();

  return {
    data: patients,
    message: "Patients fetched Successfully!",
  };
};

export const getPatient = async (
  patientId: number
): Promise<Success<Patient>> => {
  const patient = await PatientModel.getPatient(patientId);
  return {
    data: patient,
    message: "Patient Fetched Successfully!",
  };
};
