import LoginDetails from "../domain/LoginDetails";
import Success from "../domain/Success";
import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (
  email: string,
  password: string
): Promise<Success<LoginDetails>> => {
  const user = await UserModel.getUserByEmail(email);
  if (!user) {
    return {
      message: "Invalid Email or password!",
    };
  }

  const doesPasswordMatch = await bcrypt.compare(password, user.password);
  if (!doesPasswordMatch) {
    return {
      message: "Password doesn't match",
    };
  }

  const accessToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string
  );

  return {
    data: { accessToken },
    message: "User Logged In",
  };
};
