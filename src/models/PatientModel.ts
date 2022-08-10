import db from "../db/db";
import Patient, { PatientToInsert } from "../domain/Patient";

class PatientModel {
  public static table = "patient_account";

  public static async createPatient(
    patient: PatientToInsert
  ): Promise<Patient[]> {
    const newUser = await db(PatientModel.table).insert(patient).returning("*");

    return newUser;
  }

  public static async getAllPatients(): Promise<Patient[]> {
    const patients = await db(PatientModel.table).select();

    return patients;
  }
  public static async getPatient(patientId: number): Promise<Patient> {
    const patient = await db(PatientModel.table)
      .where({ id: patientId })
      .select()
      .first();

    return patient;
  }
}

export default PatientModel;
