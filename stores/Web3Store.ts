import { action, makeObservable, observable } from "mobx";
import "reflect-metadata";
import Web3 from "web3";
import { RootStore } from "./RootStore";
import { mintAbi, mintContract } from "../utils/contracts/mint";
import { ModalsEnum } from "../modals";
import { injectable } from "inversify";
interface User {
  login: string;
  email: string;
  address?: string;
  id?: string;
}

injectable()

export class Web3Store {
  @observable address: string | null = null;
  @observable isConnecting: boolean = false;
  @observable provider: any = null;
  @observable web3: Web3 | null = null;
  @observable disabledConnectBtn: boolean = false;
  @observable disabledInput: boolean = true;
  @observable warningModal: boolean = false;
  @observable disableScreen: boolean = false;
  @observable pausedMint: boolean = false;
  @observable loader: boolean = false;
  @observable attention: boolean = false;
  @observable tokensList: any[] = [];
  @observable farcasterUser?: any = undefined;
  @observable congratsText: string = "";
  @observable congratsTitle: string = "";
  @observable signer?: any | null = undefined;
  @observable contract?: any = undefined;
  @observable connected: boolean = false;
  @observable unsupported?: boolean = false;
  @observable disableMintModal?: boolean = false;
  public constructor(private readonly rootStore: RootStore) {
    makeObservable(this);
  }
  setProvider = (provider?: any, address?: string) => {
    if (address) {
      this.address = address;
    }
    console.log("CONNECT", provider);
    if (provider) {
      // this.checked = true;
      // console.log("CONNECT");
      this.web3 = new Web3(provider);
      this.contract = new this.web3.eth.Contract(mintAbi as any, mintContract);
      this.subscribeProvider();
    }
  };

  setConnected = (connected: boolean) => {
    if (!this.contract) {
      this.connected = connected;
      this.web3 = new Web3(
        "https://endpoints.omniatech.io/v1/base/mainnet/public"
      );

      this.contract = new this.web3.eth.Contract(mintAbi as any, mintContract);
    }
  };
  setAddress = (user: any) => {
    this.address = user.address;
  };
  subscribeProvider = () => {
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
  setFarcasterUser = (user: any) => {
    // console.log(user);
    // if (user?.users?.length > 0) {
    this.farcasterUser = user;
    // }
  };
  disconnectWallet = async () => {
    this.provider = null;
    this.address = null;
    this.web3 = null;
    this.disabledInput = true;
  };

  mint = async (amount: number, price: number) => {
    // this.disableMintModal = true;
    setTimeout(() => {
      console.log("HIII????");
      this.rootStore.modalStore.hideModal(ModalsEnum.Mint);
    }, 20000);
    try {
      // this.rootStore.modalStore.hideModal(ModalsEnum.Mint);
      const res = await this.contract?.methods.mint(amount).send({
        from: this.address,
        value: price,
      });
      console.log(res);
      // this.disableMintModal = false;
      return true;
    } catch (error) {
      // this.disableMintModal = false;
      console.log(error);
      return false;
    }
  };
}
