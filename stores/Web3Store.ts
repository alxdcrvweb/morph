import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
import "reflect-metadata";
import Web3 from "web3";
import { RootStore } from "./RootStore";
import Web3Modal from "web3modal";
import { chainId, netId, netName } from "../config/config";
import { WalletClient } from "wagmi";
import { mintAbi, mintContract } from "../utils/contracts/mint";

import WalletConnectProvider from "@walletconnect/web3-provider";
import { isMobile } from "react-device-detect";
interface User {
  login: string;
  email: string;
  address?: string;
  id?: string;
}

@injectable()
export class Web3Store {
  @observable address: string | null = null;
  @observable isConnecting: boolean = false;
  @observable provider: any = null;
  @observable web3Modal: any = null;
  @observable web3: Web3 | null = null;
  @observable disabledConnectBtn: boolean = false;
  @observable disabledInput: boolean = true;
  @observable warningModal: boolean = false;
  @observable disableScreen: boolean = false;
  @observable pausedMint: boolean = false;
  @observable loader: boolean = false;
  @observable attention: boolean = false;
  @observable tokensList: any[] = [];
  @observable warpcasterUser?: any = undefined;
  @observable congratsText: string = "";
  @observable congratsTitle: string = "";
  @observable signer?: WalletClient | null = undefined;
  @observable contract?: any = undefined;
  @observable connected: boolean = false;
  @observable unsupported?: boolean = false;
  public constructor(private readonly rootStore: RootStore) {
    makeObservable(this);
  }
  setSigner = (signer?: WalletClient | null, unsupported?: boolean) => {
    this.signer = signer;
    this.unsupported = unsupported;
    console.log(signer, "CONNECT");
    if (signer) {
      // this.checked = true;
      console.log("CONNECT");
      this.signer && console.log(this.signer.transport);
      this.web3 = new Web3(
        window.ethereum || "https://bsc-testnet.publicnode.com"
      );
      this.contract = new this.web3.eth.Contract(mintAbi as any, mintContract);
      this.subscribeProvider();
    }
  };

  @action getBalance = async () => {
    try {
    } catch (e) {
      console.log(e);
    }

    // this.getAllowance();
  };
  setConnected = (connected: boolean) => {
    if (!this.signer) {
      this.connected = connected;
      console.log("INITTTTTTT");
      this.web3 = new Web3(
        window.ethereum || "https://bsc-testnet.publicnode.com"
      );

      this.contract = new this.web3.eth.Contract(mintAbi as any, mintContract);
    }
  };
  @action setAddress = (user: any) => {
    this.address = user.address;
  };
  @action subscribeProvider = () => {
    console.log("subscribeProvider");
    this.web3?.currentProvider?.on("accountsChanged", (account) => {
      console.log("account", account);
      this.setAddress({ address: account[0] });
    });
  };

  disconnected = () => {
    this.address = null;
  };

  disableMintScreen = (status: boolean) => {
    this.disableScreen = status;
  };
  // initialConnect = () => {
  //   try {
  //     const w3 = new Web3("https://bsc-testnet.publicnode.com");
  //     this.contract = new w3.eth.Contract(mintAbi as any, mintContract);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  setWarpcasterUser = (user: any) => {
    // console.log(user);
    if (user?.users?.length > 0) {
      this.warpcasterUser = user.users[0];
    }
  };
  disconnectWallet = async () => {
    this.web3Modal?.clearCachedProvider();
    this.provider = null;
    this.address = null;
    this.web3 = null;
    this.disabledInput = true;
  };

  mint = async (amount: number, price: number) => {
    try {
      console.log(this.address);
      const res = await this.contract?.methods.mint(amount).send({
        from: this.address,
        value: price,
      });
      console.log(res);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}
