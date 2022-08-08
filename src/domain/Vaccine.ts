interface Vaccine {
  vaccine_id: number;
  service_name: string;
  site_location: string;
  start_date: string;
  end_date: string;
  dose_type: string;
  duration: string;
  gender: string;
  age: string;
  ethnicity: string;
}

export type VaccineToInsert = Omit<Vaccine, "vaccine_id">;

export default Vaccine;
