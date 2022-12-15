import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

//TODO -put db  file here

export const config = {
  api: {
    responseLimit: false,
  },
};

import data from "./../../../data/db.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(data);
}
