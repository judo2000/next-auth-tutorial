import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { firstName, lastName, email, password } = await request.json();

  console.log(firstName, lastName, email, password);
  // create a DB connection

  // encrypt passwor

  // form DB payload

  // Update DB

  return new NextResponse("User has been registered", { status: 201 });
};
