import { observer } from "mobx-react";
import { ModalsEnum } from ".";
import styles from "./Modal.module.sass";
import ModalContainer from "./ModalContainer";
import SmallTitle from "../components/Mint/smallTitle";
import { ModalStore } from "../stores/ModalStore";
import { useInjection } from "inversify-react";
import { Web3Store } from "../stores/Web3Store";
import { useEffect, useState } from "react";
import { fromWeiToEth } from "../utils/utilities";
import classNames from "classnames";
import { toast } from "react-toastify";

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
  const [available, setAvailable] = useState<any>(false);
  const getPhase = (phase: number) => {
    if (phase == 1) {
      return "First Phase";
    }
    if (phase == 2) {
      return "Second Phase";
    }
    if (phase == 3) {
      return "Third Phase";
    } else return "Phase 0";
  };
  const checkInfo = async () => {
    try {
      const pr = await web3Store.contract!.methods.currentMintPrice().call();
      const mnt = await web3Store
        .contract!.methods.maxMintsForCurrentPhase()
        .call();

      const phase = await web3Store.contract!.methods.currentPhase().call();
      console.log(phase);
      setPhase(getPhase(phase));
      setLimit(mnt);
      setPrice(fromWeiToEth(pr));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log(web3Store.contract);
    checkInfo();
  }, []);
  const mint = () => {
    web3Store
      .connectWallet()
      .then(async () => {
        let limit = await web3Store
          .contract!.methods.maxMintsForCurrentPhase()
          .call();
        let minted = await web3Store
          .contract!.methods.amountMinted(web3Store.address)
          .call();

        let phase = await web3Store.contract!.methods.currentPhase().call();
        if (minted == limit) {
          toast.error(`You can't mint more than ${limit} in this phase`);
          setAvailable("");
          return;
        }
        if (amount > limit - minted) {
          setAvailable("");
          toast.error(`You can't mint more than ${limit} in this phase`);
          return 
        }
        if (phase == 1) {
          console.log("PHASE 1 VALIDATION");
          let wlCheck = await web3Store
            .contract!.methods.isWhitelisted(web3Store.address)
            .call();
          setAvailable(wlCheck);
        } else if (phase == 2) {
          console.log("PHASE 2 VALIDATION");
          let phaseTwoCheck = await web3Store
            .contract!.methods.isValidPhaseTwoMinter(web3Store.address)
            .call();
          setAvailable(phaseTwoCheck);
        } else if (phase == 3) {
          console.log("PHASE 3 VALIDATION");
          setAvailable(true);
        }
      })
      .then(async () => {
        console.log("Available: ", available);
        if (available == "") return;
        if (!available)
          return toast.error("You are not allowed to mint in this phase.");
        
        await web3Store.mint(amount, price * amount * 10 ** 18).then((res) => {
          if (!res) return toast.error("Minting failed");
          modalStore.hideAllModals();
          modalStore.showModal(ModalsEnum.MintFinish);
        });
      });
  };
  return (
    <ModalContainer heading="MINT NFT" idx={idx}>
      <div className={styles.modal__mint__container}>
        <img
          className={styles.mint__close}
          onClick={() => {
            modalStore.hideAllModals();
          }}
          src="/close.svg"
        />
        <div className={styles.modal__mint}>
          <img src="/myth.png" />
          <div className={styles.modal__mint__text}>
            <SmallTitle />
            <div className={styles.modal__mint__row}>
              <div>Current Phase</div>
              <div className={styles.modal__mint__line}></div>
              <div>{phase}</div>
            </div>
            <div className={styles.modal__mint__row}>
              <div>Total Supply</div>
              <div className={styles.modal__mint__line}></div>
              <div>1800</div>
            </div>
            <div className={styles.modal__mint__row}>
              <div>Chain</div>
              <div className={styles.modal__mint__line}></div>
              <div>Base</div>
            </div>
            <div className={styles.modal__mint__row}>
              <div>Amount</div>
              <div className={styles.modal__mint__line}></div>
              <div style={{ userSelect: "none" }}>
                <span
                  className={classNames(
                    styles.modal__count,
                    amount == 1 && styles.modal__disable
                  )}
                  onClick={() => setAmount(amount - 1)}
                >
                  less
                </span>{" "}
                <span className={styles.modal__amount}>{amount}</span>{" "}
                <span
                  className={classNames(
                    styles.modal__count,
                    amount == limit && styles.modal__disable
                  )}
                  onClick={() => setAmount(amount + 1)}
                >
                  more
                </span>
              </div>
            </div>
            <div className={styles.modal__mint__row}>
              <div>Price</div>
              <div className={styles.modal__mint__line}></div>
              <div>{price * amount} ETH</div>
            </div>
            <button className={styles.modal__mint__button} onClick={mint}>
              Mint
            </button>
            <div className={styles.modal__mint__roadmap}>
              Learn more about our Roadmap
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
});
