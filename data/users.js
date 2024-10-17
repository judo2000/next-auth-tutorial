const users = [
  {
    firstName: "Stephen",
    lastName: "Moore",
    email: "stephen@email.com",
    password: "password",
  },
  {
    firstName: "Scott",
    lastName: "Moore",
    email: "scott@email.com",
    password: "password",
  },
  {
    firstName: "Rocky",
    lastName: "Moore",
    email: "rocky@dogmail.com",
    password: "barch",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
