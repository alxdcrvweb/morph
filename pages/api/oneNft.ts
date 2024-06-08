import type { NextApiRequest, NextApiResponse } from "next";
import { ipfsGateway } from "../../utils/utilities";
import fetch from "node-fetch";
import { moralisUrl } from "../../config/config";
import { mintContract } from "../../utils/contracts/mint";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const chain = req?.query?.chain.toString();
  const id = req?.query?.id.toString();
  if (!chain) {
    res.status(400).json({ error: "Missing address or chain parameter" });
    return;
  }
  const params = {
    normalizeMetadata: "true",
    chain: chain,
  };

  const query = new URLSearchParams(params).toString();
  try {
    console.log(moralisUrl + `nft/${mintContract}/${id}/?` + query);
    const response = await fetch(
      moralisUrl + `nft/${mintContract}/${id}/?` + query,
      {
        headers: {
          "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_API_KEY as string,
        },
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
