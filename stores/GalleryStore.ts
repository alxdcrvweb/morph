import { RootStore } from "./RootStore";
import { action, makeObservable, observable } from "mobx";
import { ModalsEnum } from "../modals";
import "reflect-metadata";
import axios from "axios";
import { mintContract } from "../utils/contracts/mint";
import { chainId, moralisUrl } from "../config/config";
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
      let ch = this.characters.find((el) => el.id == id);
      if (ch) this.char = ch;
      console.log(ch);
      if (!ch) {
        console.log(ch, chainId, id);
        this.getOneCharacter(chainId, id);
      }
    } else {
      this.char = null;
    }
  };
  getOneCharacter = async (chain: string, id: string) => {
    const params = {
      chain: chain,
      id: id,
    };

    const query = new URLSearchParams(params).toString();
    try {
      const res = await axios.get("/api/oneNft?" + query);
      console.log(res.data);
      this.char = {
        block_number: res.data.block_number,
        id: res.data.token_id,
        owner: res.data.owner_of,
        ...res.data.normalized_metadata,
      };
      console.log(res);
    } catch (e) {
      console.log(e);
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
            // console.log(el);
            return {
              block_number: el.block_number,
              id: el.token_id,
              owner: el.owner_of,
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
