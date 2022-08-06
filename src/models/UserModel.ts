import { UserToInsert } from "../domain/User";
import db from "../db/db";

class UserModel {
  public static table = "user_account";

  public static async createUser(user: UserToInsert) {
    const newUser = await db(UserModel.table).insert(user, [
      "id",
      "first_name",
      "last_name",
      "email",
    ]);
    return newUser;
  }

  public static async getUserByEmail(email: string) {
    const user = await db(UserModel.table)
      .where({ email: email })
      .select()
      .first();

    return user;
  }
}

export default UserModel;
