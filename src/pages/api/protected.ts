import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { getUser, isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const user = await getUser();
  const data = { message: "Hello User", id: user?.given_name };

  return res.status(200).json({ data });
}
