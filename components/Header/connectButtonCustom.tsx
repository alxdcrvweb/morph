import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import style from "../../modals/Modal.module.sass";
import { SeparatedConnect } from "./separatedConnect";
import { useWalletClient } from "wagmi";
import classNames from "classnames";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { Web3Store } from "../../stores/Web3Store";
const ConnectButtonCustom = observer(
  ({ isHeader, isAuth }: { isHeader?: boolean; isAuth?: boolean }) => {
    const { setConnected, setSigner, disconnected, setAddress } =
      useInjection(Web3Store);
    const router = useRouter();
    return (
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openChainModal,
          authenticationStatus,
          mounted,
        }) => {
          const { data: walletClient } = useWalletClient({
            onSuccess(data) {
              // console.log("Success", data);
              setSigner(data, chain?.unsupported);
            },
          });

          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");
          // useEffect(()=>{
          //   if(claim!==0) {
          //     setReward(Number(Number(fromWei(claim.toString())).toFixed(2)))
          //   }
          // },[claim])

          useEffect(() => {
            setConnected(connected as boolean);
            console.log("account:", account);
            // if (
            //   user?.account?.address.toLowerCase() !== account?.address?.toLowerCase()
            // ) {
            //   setNeedChangeWallet(true);
            // } else {
            //   setNeedChangeWallet(false);
            // }
            if (connected) {
              setAddress(account);
            } else {
              disconnected();
            }
          }, [connected, account?.address]);
          // useEffect(() => {
          //   if (account?.address ) {
          //     setAddress(walletClient?.transport, account?.address);
          //   }
          // }, [account?.address]);
          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (chain?.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className={classNames(
                        style.modal__mint__button
                      )}
                    >
                      Change Network
                    </button>
                  );
                }

                return (
                  <SeparatedConnect/>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    );
  }
);
export default ConnectButtonCustom;
