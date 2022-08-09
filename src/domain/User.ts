interface User {
  id: number;
  first_name: string;
  last_name: string;
  dob: Date;
  ethnicity: string;
  gender: string;
  email: string;
  password: string;
  street: string;
  city: string;
  state: string;
  isAdmin: boolean;
}

export type UserToInsert = Omit<User, "id" | "isAdmin">;

export default User;
