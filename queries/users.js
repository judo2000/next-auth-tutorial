import { User } from "../model/user-model";

export async function createUser(user) {
  try {
    await User.create(user);
  } catch (err) {
    throw new Error(err);
  }
}

export async function getUserByEmail(email) {
  const user = await User.find({ email: email }).select("-password").lean();

  return user;
}
