import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import { ModalStore } from "../stores/ModalStore";
import { MintModal } from "./Mint";
import { MintFinish } from "./MintFinish";

export enum ModalsEnum {
  Mint,
  MintFinish,
}

const MODAL_REGISTRY = {
  [ModalsEnum.Mint]: MintModal,
  [ModalsEnum.MintFinish]: MintFinish,
};

export const ModalsContainer = observer(() => {
  const modalStore = useInjection(ModalStore);

  return (
    <>
      {modalStore.activeModals.map((m, i) => {
        const Component = MODAL_REGISTRY[m.key];
        return <Component key={i} data={m.data} idx={i} />;
      })}
    </>
  );
});
