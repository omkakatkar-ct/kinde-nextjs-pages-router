import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = { message: "Hello world" };

  return res.status(200).json({ data });
}
