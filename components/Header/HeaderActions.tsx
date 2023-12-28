import cn from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { FC, useEffect, useState } from "react";
import { UserStore } from "../../stores/UserStore";
import styles from "../../styles/header.module.scss";
import { maskAddress } from "../../utils/utilities";
import Social from "../Social";
import eye from "../../public/icons/eye.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface HeaderProps {
  routerPath: string;
  openMenuHandler: () => void;
}

const HeaderActions: FC<HeaderProps> = observer(
  ({ routerPath, openMenuHandler }) => {
    const router = useRouter();
    const { address, disconnectWallet, disabledConnectBtn, connectWallet } =
      useInjection(UserStore);
    const [active, setActive] = useState("");
    console.log(" HeaderActions routerPath", routerPath);
    useEffect(() => {
      console.log(router.asPath);
      if (
        router.asPath.includes("sleeping") ||
        router.asPath.includes("awake")
      ) {
        setActive("sleeping");
      } else if (router.asPath.includes("story")) {
        setActive("story");
      }
    }, [router.asPath]);
    const clickHandler = () => {
      if (address) {
        disconnectWallet();
      } else {
        connectWallet();
      }
    };

    return (
      <div className={styles.header__actions}>
        {active !== "" && (
          <Link href="/sleeping">
            <div
              className={cn(
                styles.header__menu,
                active == "sleeping" && styles.header__active
              )}
            >
              {/* <span>Menu</span>
				<span>Menu</span> */}
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
        <Social routerPath={routerPath} />
        {active !== "" && (
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
        )}
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
