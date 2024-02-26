import { injectable } from "inversify";
import { makeObservable, observable } from "mobx";
import "reflect-metadata";
import Web3 from "web3";
import { RootStore } from "./RootStore";
import Web3Modal from "web3modal";
import { chainId, netId, netName } from "../config/config";
import axios from "axios";
import { mintAbi, mintContract } from "../utils/contracts/mint";
import { Contract } from "web3-eth-contract";
import { fromWeiToEth } from "../utils/utilities";
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
  @observable pausedMint: boolean = false;
  @observable loader: boolean = false;
  @observable attention: boolean = false;
  @observable tokensList: any[] = [];
  @observable warpcasterUser?: any = undefined;
  @observable congratsText: string = "";
  @observable congratsTitle: string = "";
  @observable contract?: Contract = undefined;
  public constructor(private readonly rootStore: RootStore) {
    makeObservable(this);
  }

  connectWallet = async () => {
    if (this.disabledConnectBtn) return;
    this.disabledConnectBtn = true;
    const web3Modal = new Web3Modal({
      cacheProvider: false, // optional
      // providerOptions: {
      // 	walletconnect: {
      // 		package: WalletConnectProvider,
      // 		options: {
      // 			infuraId: INFURA_ID,
      // 			chainId: 56,
      // 		},
      // 	},
      // },
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
    this.web3Modal = web3Modal;
    try {
      const prov = await web3Modal.connect();
      console.log("connectWallet", prov);
      const w3 = new Web3(prov);
      this.address = prov.selectedAddress || prov.address;
      this.web3 = w3;
      this.disabledConnectBtn = false;
      this.disabledInput = false;
      this.contract = new this.web3.eth.Contract(mintAbi as any, mintContract);
      prov.on("chainChanged", () => {
        this.checkNetwork();
      });
      // this.getTokens()
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      this.congratsText = "Something went wrong, please try again";
      this.congratsTitle = "";
      this.attention = true;
      this.disabledConnectBtn = false;
      return;
    }
  };
  initialConnect = () => {
    try {
      const w3 = new Web3("https://bsc-testnet.publicnode.com");
      this.contract = new w3.eth.Contract(mintAbi as any, mintContract);
    } catch (e) {
      console.log(e);
    }
  };
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

  checkNetwork = async () => {
    if (!this?.provider) {
      return;
    }
    if (this?.provider?.chainId === chainId) {
      console.log(
        "this?.provider && this?.provider?.chainId === chainId",
        this?.provider && this?.provider?.chainId === chainId
      );
      this.disabledInput = false;
      return;
    }
    this.disabledInput = true;
    this.congratsText = "Please change the network to " + netName;
    this.congratsTitle = "";
    this.attention = true;
    try {
      const res = await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId }], // chainId must be in hexadecimal numbers
      });
      console.log("checkNetwork res res");
      this.disabledInput = false;
      return true;
    } catch (err) {
      console.error("swith net error", err);
      return false;
    }
  };

  mint = async (amount: number, price:number) => {
    try {
      console.log(this.address);
      const res = await this.contract?.methods.mint(amount).send({
        from: this.address,
        value: price,
      });
      console.log(res);
      return true
    } catch (error) {
      console.log(error);
      return false
    }
  };
}
