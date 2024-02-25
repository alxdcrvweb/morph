import { observer } from "mobx-react";
import { ModalsEnum } from ".";
import styles from "./Modal.module.sass";
import ModalContainer from "./ModalContainer";
import SmallTitle from "../components/Mint/smallTitle";

interface modalProps {
  data?: any;
  idx: ModalsEnum;
}

export const MintModal = observer(({ data, idx }: modalProps) => {
  return (
    <ModalContainer heading="MINT NFT" idx={idx}>
      <div className={styles.modal__mint__container}>
        <div className={styles.modal__mint}>
          <img src="/myth.png" />
          <div className={styles.modal__mint__text}>
            <SmallTitle />
            <div className={styles.modal__mint__row}>
              <div>Current Phase</div>
              <div className={styles.modal__mint__line}></div>
              <div>First Phase</div>
            </div>
            <div className={styles.modal__mint__row}>
              <div>TotalSupply</div>
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
              <div>1 / 2 / 3</div>
            </div>
            <div className={styles.modal__mint__row}>
              <div>Price</div>
              <div className={styles.modal__mint__line}></div>
              <div>0,01 ETH</div>
            </div>
            <button className={styles.modal__mint__button}>Mint</button>
            <div className={styles.modal__mint__roadmap}>Learn more about our Roadmap</div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
});
