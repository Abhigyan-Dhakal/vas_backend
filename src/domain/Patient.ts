interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  dob: Date;
  ethnicity: string;
  gender: string;
  email: string;
  street: string;
  city: string;
  state: string;
  insurance_id: string;
  member_id: string;
  insurance_provider: string;
  document: string;
}

export type PatientToInsert = Omit<Patient, "id">;

export default Patient;
