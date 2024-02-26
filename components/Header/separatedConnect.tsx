import { useConnectModal } from "@rainbow-me/rainbowkit";
import style from "../../modals/Modal.module.sass";
import classNames from "classnames";
import { observer } from "mobx-react";

export const SeparatedConnect = observer(
  ({ cssClassProps }: { cssClassProps?: any }) => {
    const { openConnectModal } = useConnectModal();
    return (
      <button
        onClick={() => {
          // localStorage.setItem("auth", "false")
          openConnectModal && openConnectModal();
        }}
        type="button"
        className={classNames(style.modal__mint__button)}
      >
        Connect wallet
      </button>
    );
  }
);
