import { observer } from "mobx-react";
import { ModalsEnum } from ".";
import styles from "./Modal.module.sass";
import ModalContainer from "./ModalContainer";
import SmallTitle from "../components/Mint/smallTitle";
import { ModalStore } from "../stores/ModalStore";
import { useInjection } from "inversify-react";
import { Web3Store } from "../stores/Web3Store";
import { useEffect, useMemo, useState } from "react";
import { fromWeiToEth } from "../utils/utilities";
import classNames from "classnames";
import { toast } from "react-toastify";
import ConnectButtonCustom from "../components/Header/connectButtonCustom";
import { IMAGES } from "../components/images";

interface modalProps {
  data?: any;
  idx: ModalsEnum;
}

export const MintModal = observer(({ data, idx }: modalProps) => {
  const modalStore = useInjection(ModalStore);
  const web3Store = useInjection(Web3Store);
  const [amount, setAmount] = useState(1);
  const [phase, setPhase] = useState("0");
  const [price, setPrice] = useState(0);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);
  const [supply, setSupply] = useState(0);
  const [presaleCap, setPresaleCap] = useState(0);
  const [mintCap, setMintCap] = useState(0);

  const [available, setAvailable] = useState<any>(true);
  const [callContract, setCallContract] = useState<any>([]);
  const noTokens = useMemo(
    () => presaleCap == supply && phase == "First Phase",
    [presaleCap, supply, phase]
  );
  const noAmount = useMemo(
    () => amount >= presaleCap - supply && phase == "First Phase",
    [amount, presaleCap, supply, phase]
  );
  useEffect(() => {
    web3Store.disableMintScreen(true);
    return () => {
      web3Store.disableMintScreen(false);
    };
  }, []);
  const getPhase = (phase: number) => {
    if (phase == 1) {
      return "First Phase";
    }
    if (phase == 2) {
      return "Second Phase";
    }
    if (phase == 3) {
      return "Minting Closed";
    } else return "Phase 0";
  };
  const checkInfo = async () => {
    setLoading(true);
    try {
      let cc = await Promise.all([
        web3Store.contract?.methods.maxMintsForCurrentPhase().call(),
        web3Store.contract?.methods.currentPhase().call(),
        web3Store.contract?.methods.getPrices().call(),
        web3Store.contract?.methods.presaleCap().call(),
        web3Store.contract?.methods.supply().call(),
        web3Store.contract?.methods.mintCap().call(),
      ]);
      const mnt = Number(cc[0]);
      const phase = Number(cc[1]);
      const pr = cc[2];
      setCallContract(cc);
      setPhase(getPhase(phase));
      setLimit(Number(mnt));
      setSupply(Number(cc[4]));
      setPresaleCap(Number(cc[3]));
      setMintCap(Number(cc[5]));

      if (phase == 1) {
        setPrice(fromWeiToEth(pr[0]));
      } else if (phase == 2) {
        setPrice(fromWeiToEth(pr[2]));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (web3Store.contract) {
      console.log("check 1");
      checkInfo();
    }
  }, [web3Store.contract]);
  // const check = () => {
  //   if (web3Store.address && web3Store.contract) {
  //     mintCheck();
  //   } else if (!web3Store.address && web3Store.contract) {
  //     checkInfo();
  //   }
  // };
  useEffect(() => {
    if (web3Store.address && web3Store.contract && callContract.length > 0) {
      console.log("check 2");
      mintCheck();
    }
  }, [web3Store.address, callContract]);

  const mintCheck = async () => {
    setLoading(true);
    try {
      let minted = await web3Store.contract?.methods
        .amountMinted(web3Store.address)
        .call();
      console.log(" check 2 hu", callContract);
      const limit = Number(callContract[0]);
      const phase = Number(callContract[1]);
      const pr = callContract[2];
      if (limit == Number(minted)) {
        // toast.error(`You can't mint more than ${limit} in this phase`);
        setAvailable("limit");
        return;
      }
      if (amount > limit - Number(minted)) {
        setAvailable("limit");
        // toast.error(`You can't mint more than ${limit} in this phase`);
        return;
      }
      if (phase == 1) {
        console.log("PHASE 1 VALIDATION");
        let wlCheck = await web3Store
          .contract!.methods.isWhitelisted(web3Store.address)
          .call();
        setAvailable(wlCheck);
      } else if (phase == 2) {
        let wlCheck = await web3Store
          .contract!.methods.isValidPhaseTwoMinter(web3Store.address)
          .call();
        if (wlCheck) {
          setPrice(fromWeiToEth(pr[1]));
        }
        setAvailable(true);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  const mint = async () => {
    console.log("Available: ", available);
    if (available == "limit") return;
    if (!available)
      return toast.error("You are not allowed to mint in this phase.");

    await web3Store.mint(amount, price * amount * 10 ** 18).then((res) => {
      if (!res) return;
      // console.log("CLOSSEE?");
      modalStore.hideAllModals();
      modalStore.showModal(ModalsEnum.MintFinish);
    });
  };
  return (
    <ModalContainer heading="MINT NFT" idx={idx}>
      <div
        className={classNames(
          styles.modal__mint__container,
          web3Store.disableMintModal && styles.modal__disable
        )}
      >
        <img
          className={styles.mint__close}
          onClick={() => {
            modalStore.hideAllModals();
          }}
          src="/close.svg"
        />
        <div className={styles.modal__mint}>
          <img src={IMAGES.mint.myth} />
          <div className={styles.modal__mint__text}>
            <SmallTitle />
            <div
              className={classNames(
                styles.modal__mint__row,
                // phase == "Second Phase" && styles.mint__row__two
              )}
            >
              <div>Current Phase</div>
              <div className={styles.modal__mint__line}></div>
              <div>{phase}</div>
            </div>
            <div
              className={classNames(
                styles.modal__mint__row,
                // phase == "Second Phase" && styles.mint__row__two
              )}
            >
              <div>Total Supply</div>
              <div className={styles.modal__mint__line}></div>
              <div>{mintCap}</div>
            </div>
            <div
              className={classNames(
                styles.modal__mint__row,
                // phase == "Second Phase" && styles.mint__row__two
              )}
            >
              <div>Chain</div>
              <div className={styles.modal__mint__line}></div>
              <div>Base</div>
            </div>
            {/* {!noTokens && (phase == "First Phase" ? (
              <div className={styles.modal__mint__row}>
                <div>Tokens left for WL</div>
                <div className={styles.modal__mint__line}></div>
                <div>{presaleCap - supply}</div>
              </div>
            ) : phase == "Second Phase" ? (
              <div className={styles.modal__mint__row}>
                <div>Tokens left</div>
                <div className={styles.modal__mint__line}></div>
                <div>{mintCap - supply}</div>
              </div>
            ) : (
              <></>
            ))} */}
            <div
              className={classNames(
                styles.modal__mint__row,
                // phase == "Second Phase" && styles.mint__row__two
              )}
            >
              <div>Amount</div>
              <div className={styles.modal__mint__line}></div>
              <div style={{ userSelect: "none" }}>
                <span
                  className={classNames(
                    styles.modal__count,
                    amount == 1 && amount == 1 && styles.modal__disable
                  )}
                  onClick={() => setAmount(amount - 1)}
                >
                  less
                </span>{" "}
                <span className={styles.modal__amount}>{amount}</span>{" "}
                <span
                  className={classNames(
                    styles.modal__count,
                    (amount == limit || noAmount) && styles.modal__disable
                  )}
                  onClick={() => setAmount(amount + 1)}
                >
                  more
                </span>
              </div>
            </div>
            <div
              className={classNames(
                styles.modal__mint__row,
                // phase == "Second Phase" && styles.mint__row__two
              )}
            >
              <div>Price</div>
              <div className={styles.modal__mint__line}></div>
              <div>{price * amount} ETH</div>
            </div>
            {web3Store.address ? (
              <button
                className={classNames(styles.modal__mint__button)}
                style={{
                  display:
                    !noTokens && available && available !== "limit" && !loading && phase !== "Minting Closed"
                      ? "block"
                      : "none",
                }}
                onClick={() =>
                  mintCheck().then((el) => {
                    mint();
                  })
                }
              >
                Mint
              </button>
            ) : (
              <ConnectButtonCustom />
            )}
            {available == "limit" && (
              <div className={styles.modal__mint__wl}>
                You can't mint more than {limit} in this phase. Follow the
                updates on Farcaster{" "}
                <a
                  href="https://warpcast.com/~/channel/morpheus"
                  target="_blank"
                >
                  /morpheus
                </a>
              </div>
            )}
            {noTokens && (
              <div className={styles.modal__mint__wl}>
                The second phase will begin soon. Follow the updates on
                Farcaster{" "}
                <a
                  href="https://warpcast.com/~/channel/morpheus"
                  target="_blank"
                >
                  /morpheus
                </a>
              </div>
            )}
            {!available && (
              <div className={styles.modal__mint__wl}>
                You are not in WL in current phase. Come back on Phase 2 of the
                mint. Follow the updates on Farcaster{" "}
                <a
                  href="https://warpcast.com/~/channel/morpheus"
                  target="_blank"
                >
                  /morpheus
                </a>
              </div>
            )}
            {available && available !== "limit" && (
              <div className={styles.modal__mint__roadmap}>
                Learn more about our Roadmap
              </div>
            )}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
});
