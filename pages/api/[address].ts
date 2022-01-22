import type { NextApiRequest, NextApiResponse } from "next";

import { MinecraftServer, Error } from "../../types/types";
import { getServerInfo } from "../../lib/getServerInfo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MinecraftServer | Error>,
) {
  const { address } = req.query;

  if (!address || typeof address !== "string") {
    res.statusCode = 400;
    return res.json({ error: true, message: "Please input a valid address." });
  }

  const server = await getServerInfo(address);

  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=90");

  res.status(200).json(server);
}
