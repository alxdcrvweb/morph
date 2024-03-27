import { useConnectModal } from "@rainbow-me/rainbowkit";
import style from "../../modals/Modal.module.sass";
import classNames from "classnames";
import { observer } from "mobx-react";
import leaderboardCss from "../../styles/leaderboard.module.scss";
import { Web3Store } from "../../stores/Web3Store";
import { useInjection } from "inversify-react";
export const SeparatedConnect = observer(
  ({ cssClassProps }: { cssClassProps?: any }) => {
    const { openConnectModal } = useConnectModal();
    const web3store = useInjection(Web3Store);
    return (
      <button
        onClick={() => {
          web3store.setInitConnect(false);
          openConnectModal && openConnectModal();
        }}
        type="button"
        className={classNames(leaderboardCss.leaderboard__button)}
      >
        Connect with wallet
      </button>
    );
  }
);
