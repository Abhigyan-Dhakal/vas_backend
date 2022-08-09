import Success from "../domain/Success";
import Vaccine, { VaccineToInsert } from "../domain/Vaccine";
import VaccineModel from "../models/VaccineModel";

// export const getAllVaccines = async():<Promise<Success<>>>=>{

// }

export const addVaccine = async (
  vaccineDetails: VaccineToInsert
): Promise<Success<Vaccine>> => {
  const insertedVaccine = await VaccineModel.addVaccine(vaccineDetails);

  return {
    data: insertedVaccine,
    message: "Vaccine Added Successfully!",
  };
};

export const getAllVaccines = async (): Promise<Success<Vaccine[]>> => {
  const vaccineData = await VaccineModel.getAllVaccines();

  return {
    data: vaccineData,
    message: "Vaccines fetched Successfully!",
  };
};

export const getVaccine = async (
  vaccineId: number
): Promise<Success<Vaccine>> => {
  const vaccineData = await VaccineModel.getVaccine(vaccineId);

  return {
    data: vaccineData,
    message: "Vaccine fetched Successfully!",
  };
};

export const updateVaccine = async (
  vaccineDetails: Vaccine
): Promise<Success<Vaccine>> => {
  // console.log(vaccineDetails);
  const updatedVaccineDetails = await VaccineModel.updateVaccine(
    vaccineDetails
  );
  return {
    data: updatedVaccineDetails,
    message: "Vaccine Updated Successfully!",
  };
};

export const deleteVaccine = async (
  vaccineId: number
): Promise<Success<Vaccine>> => {
  await VaccineModel.deleteVaccine(vaccineId);

  return {
    message: "Vaccine deleted Successfully!",
  };
};
