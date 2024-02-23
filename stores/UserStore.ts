import { injectable } from "inversify";
import { makeObservable, observable } from "mobx";
import "reflect-metadata";
import Web3 from "web3";
import { RootStore } from "./RootStore";
import Web3Modal from "web3modal";
import { chainId, mintAddress, netId, netName } from "../config/config";
import axios from "axios";
import { CONTRACT_ABI } from "../utils/abi";

interface User {
  login: string;
  email: string;
  address?: string;
  id?: string;
}

@injectable()
export class UserStore {
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
      const w3 = new Web3(prov);
      this.provider = prov;
      this.address = prov.selectedAddress || prov.address;
      this.web3 = w3;
      this.disabledConnectBtn = false;
      this.disabledInput = false;
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

  paused = async () => {
    if (!this.web3) return;

    const contract = new this.web3!.eth.Contract(
      CONTRACT_ABI as any,
      mintAddress
    );

    try {
      const paused = await contract?.methods.paused().call();
      this.pausedMint = paused;
      this.warningModal = false;
    } catch (error) {
      console.log("error", error);
    }
  };

  setWarningModal = async (value: boolean) => {
    this.warningModal = value;
  };
  setAttentionModal = async (value: boolean) => {
    this.attention = value;
  };

  mint = async (inputValue: string) => {
    if (!this.web3 && this.disabledInput) return;
    this.loader = true;
    this.disabledInput = true;
    const contract = new this.web3!.eth.Contract(
      CONTRACT_ABI as any,
      mintAddress
    );
    try {
      const paused = await contract?.methods.paused().call();
      if (paused) {
        this.pausedMint = paused;
        return;
      }
      const currentTokenId = await contract?.methods
        .currentSuccessfulTokenId()
        .call();
      const iteration = await contract?.methods
        .mintedOnCurrentIteration(this.provider.selectedAddress, currentTokenId)
        .call();
      const value = iteration ? this.web3!.utils.toWei("0.02", "ether") : 0;
      await contract?.methods.mint(inputValue.toLocaleUpperCase()).send({
        from: this.provider.selectedAddress,
        value: value,
      });

      console.log("contract rdy");

      this.congratsText = "";
      this.congratsTitle = "wow";
      this.attention = true;
      this.warningModal = false;
    } catch (error) {
      console.log("error", error);
      this.congratsText = "Something went wrong, please try again";
      this.congratsTitle = "";
      this.attention = true;
    }
    this.disabledInput = false;
    this.loader = false;
  };

  getTokens = async () => {
    // console.log('getTokens', this.web3);
    if (!this.web3) return;
    const contract = new this.web3!.eth.Contract(
      CONTRACT_ABI as any,
      mintAddress
    );
    console.log("contract", contract);
    console.log("CONTRACT_ABI", CONTRACT_ABI);
    console.log("mintAddress", mintAddress);
    // this.tokensList = []
    let arr: any[] = [];
    try {
      const currentTokenId =
        Number(await contract?.methods.currentSuccessfulTokenId().call()) + 5;
      console.log("getTokens currentTokenId", currentTokenId);
      for (let tokenId = 1; tokenId <= currentTokenId; tokenId++) {
        const balanceOf = await contract?.methods
          .balanceOf(this.provider.selectedAddress, tokenId)
          .call();
        console.log("getTokens balanceOf", balanceOf, tokenId);
        if (balanceOf > 0) {
          const uri = await contract.methods.uri(tokenId).call();
          console.log("getTokens uri", uri);
          const metadata: any = await axios.get(
            uri.replace("ipfs://", "https://ipfs.io/ipfs/")
          );
          console.log("getTokens metadata", metadata);
          for (let int = 0; int < balanceOf; int++) {
            arr = [...arr, metadata.data.image];
            // this.tokensList = [...this.tokensList, metadata.data.image]
            console.log("getTokens metadata.data.image", metadata.data.image);
          }
        }
      }
    } catch (error) {
      console.log("error", error);
    }
    this.tokensList = [...arr];
    console.log("getTokens this.tokensList", this.tokensList);
  };
}
