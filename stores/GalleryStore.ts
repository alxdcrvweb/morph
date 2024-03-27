import { RootStore } from "./RootStore";
import { action, makeObservable, observable } from "mobx";
import { ModalsEnum } from "../modals";
import "reflect-metadata";
import axios from "axios";
import { mintContract } from "../utils/contracts/mint";
import { moralisUrl } from "../config/config";
import { injectable } from "inversify";

injectable();

export class GalleryStore {
  @observable characters: any[] = [];
  @observable char: any;
  @observable takenNft: any;
  constructor(private readonly rootStore: RootStore) {
    makeObservable(this);
  }
  setChar = (id?: string) => {
    if (id) {
      this.char = this.characters.find((el) => el.id == id);
    } else {
      this.char = null;
    }
  };
  getCharacters = async (address: string, chain: string) => {
    console.log(address, "hiii");
    const params = {
      chain: chain,
      address: address,
    };

    const query = new URLSearchParams(params).toString();

    try {
      const res = await axios.get("/api/nfts?" + query);
      console.log(res, res.data.result.length);

      return (
        res.data.result
          // .filter((el: any) => el.token_uri)
          .map((el: any) => {
            console.log(el);
            return {
              block_number: el.block_number,
              id: el.token_id,
              ...el.normalized_metadata,
            };
          })
      );
    } catch (e) {
      console.log(e);
    }
  };
  setCharacters = (characters: any[]) => {
    this.characters = characters;
  };
}
