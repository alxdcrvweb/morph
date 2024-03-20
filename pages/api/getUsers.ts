import type { NextApiRequest, NextApiResponse } from "next";
import { ipfsGateway } from "../../utils/utilities";
import fetch from "node-fetch";
import { moralisUrl } from "../../config/config";
import { mintContract } from "../../utils/contracts/mint";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req?.query?.chain);
  const fid = req?.query?.fid.toString();
  if (!fid) {
    res.status(400).json({ error: "Missing fid parameter" });
    return;
  }
  try {
    const response = await fetch(
      `https://api.neynar.com/v2/farcaster/user/bulk?fids=${fid}&viewer_fid=${fid}`,
      {
        headers: {
          "Content-Type": "application/json",
          api_key: process.env.NEYNAR_API_KEY as string,
        },
      }
    );
    console.log(response);
    const data = await response.json();
    // Make Moralis API call using the data
    // ...
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
