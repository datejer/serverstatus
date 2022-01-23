import type { NextApiRequest, NextApiResponse } from "next";

import { Error, BedrockServer } from "../../../types/types";
import { getBedrockServerInfo } from "../../../lib/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BedrockServer | Error>,
) {
  const { address } = req.query;

  if (!address || typeof address !== "string") {
    res.statusCode = 400;
    return res.json({ error: true, message: "Please input a valid address." });
  }

  const server = await getBedrockServerInfo(address);

  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=90");

  res.status(200).json(server);
}
