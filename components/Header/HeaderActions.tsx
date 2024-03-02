import cn from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { FC, useEffect, useState } from "react";
import styles from "../../styles/header.module.scss";
import { maskAddress } from "../../utils/utilities";
import Social from "../Social";
import eye from "../../public/icons/eye.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Web3Store } from "../../stores/Web3Store";

interface HeaderProps {
  routerPath: string;
  active: string;
}

const HeaderActions: FC<HeaderProps> = observer(
  ({ routerPath, active }) => {
    const router = useRouter();

    console.log(" HeaderActions routerPath", routerPath);

    // const clickHandler = () => {
    //   if (address) {
    //     disconnectWallet();
    //   } else {
    //     connectWallet();
    //   }
    // };

    return (
      <div className={styles.header__actions}>
        {active !== "" && (
          <a href="https://warpcast.com/~/channel/morpheus" target="_blank" >
            <div
              className={cn(
                styles.header__menu,
              )}
            >
              {/* <span>Journey</span>
				<span>Journey</span> */}
              Warpcast
            </div>
          </a>
        )}
        {active !== "" && (
          <Link href="/sleeping">
            <div
              className={cn(
                styles.header__menu,
                active == "active" && styles.header__active
              )}
            >
              {/* <span>Journey</span>
				<span>Journey</span> */}
              Journey
            </div>
          </Link>
        )}
        {active !== "" && (
          <Link href="/story">
            <div
              className={cn(
                styles.header__menu,
                active == "story" && styles.header__active
              )}
            >
              {/* <span>Menu</span>
				<span>Menu</span> */}
              Story
            </div>
          </Link>
        )}
        {/* {active !== "" && (
          <Link href="/mint">
            <div
              className={cn(
                styles.header__menu,
                active == "mint" && styles.header__active
              )}
            >
           
              Mint
            </div>
          </Link>
        )}
         */}
        {/* {active !== "" && (
          <div
            className={cn(
              styles.header__connect,
              "_btn",
              !disabledConnectBtn && "_doubleFonts",
              routerPath === "awake" && "_btn_awake",
              routerPath === "terminal" && "_btn_terminal"
            )}
            onClick={clickHandler}
          >
            {disabledConnectBtn ? (
              <span className={styles.header__eye}>
                <Image src={eye} alt="eye icon" width={32} height={32} />
              </span>
            ) : !address ? (
              <>
                <span>Connect</span>
                <span>Connect</span>
              </>
            ) : (
              <>
                <span>{maskAddress(address)}</span>
                <span>Disconnect</span>
              </>
            )}
          </div>
        )} */}
       
      </div>
    );
  }
);

export default HeaderActions;

// <div className={`${styles.burger} ${openMenu ? styles.burger_active : ''}`} onClick={() => setOpenMenu(prev => !prev)}>
// <span></span>
// <span></span>
// <span></span>
// </div>
