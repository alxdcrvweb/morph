import { injectable } from "inversify";
import { RootStore } from "./RootStore";
import { action, makeObservable, observable } from "mobx";
import { ModalsEnum } from "../modals";
import "reflect-metadata";
import axios from "axios";
import { mintContract } from "../utils/contracts/mint";
import { moralisUrl } from "../config/config";

export class GalleryStore {
  characters: any[] = [];
  char: any;
  takenNft: any;
  constructor(private readonly rootStore: RootStore) {
    makeObservable(this);
  }
  setChar = (id: string) => {
    this.char = this.characters.find((el) => el.id == id);
  }
  getCharacters = async (
    address: string,
    chain: string
  ) => {
    const params = {
      chain: chain,
      offset: "1",
      normalizeMetadata: "true",
      token_addresses: mintContract,
    };

    const query = new URLSearchParams(params).toString();

    try {
      const res = await axios.get(moralisUrl + address + `/nft/?` + query, {
        headers: {
          "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_API_KEY as string,
        },
      });
      console.log(res, res.data.result.length);

      this.characters = res.data.result
        // .filter((el: any) => el.token_uri)
        .map((el: any) => {
          console.log(el);
          return {
            block_number: el.block_number,
            id: el.token_id,
            ...el.normalized_metadata,
          };
        });
    } catch (e) {
      console.log(e);
    }
  };
}
