import Vaccine, { VaccineToInsert } from "../domain/Vaccine";
import db from "../db/db";

class VaccineModel {
  public static table = "vaccine";

  public static async addVaccine(vaccineDetails: VaccineToInsert) {
    const newVaccine = await db(VaccineModel.table).insert(vaccineDetails, [
      "vaccine_id",
      "service_name",
      "site_location",
      "start_date",
      "end_date",
      "dose_type",
      "duration",
      "gender",
      "age",
      "ethnicity",
    ]);

    return newVaccine;
  }

  public static async getAllVaccines(): Promise<Vaccine[]> {
    const vaccines = await db(VaccineModel.table).select();

    return vaccines;
  }

  public static async getVaccine(vaccineId: number): Promise<Vaccine> {
    const vaccine = await db(VaccineModel.table)
      .where({
        vaccine_id: vaccineId,
      })
      .select()
      .first();

    return vaccine;
  }

  public static async updateVaccine(vaccine: Vaccine): Promise<Vaccine> {
    console.log(vaccine);
    const [updatedVaccine] = await db(VaccineModel.table)
      .where({
        vaccine_id: vaccine.vaccine_id,
      })
      .update(vaccine)
      .returning([
        "vaccine_id",
        "service_name",
        "site_location",
        "start_date",
        "end_date",
        "dose_type",
        "duration",
        "gender",
        "age",
        "ethnicity",
      ]);

    return updatedVaccine;
  }

  public static async deleteVaccine(vaccineId: number): Promise<void> {
    await db(VaccineModel.table).where({ vaccine_id: vaccineId }).delete();
  }
}

export default VaccineModel;
