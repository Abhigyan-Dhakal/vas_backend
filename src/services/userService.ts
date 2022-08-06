import Success from "../domain/Success";
import User, { UserToInsert } from "../domain/User";
import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";

export const createUser = async (
  user: UserToInsert
): Promise<Success<User>> => {
  const { password } = user;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const insertedUser = await UserModel.createUser({
    ...user,
    password: hashedPassword,
  });

  return {
    data: insertedUser,
    message: "User Added Successfully",
  };
};
