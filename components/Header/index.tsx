import { FC, useCallback, useEffect, useState } from "react";
import styles from "../../styles/header.module.scss";
import AudioPlayer from "../AudioPlayer";
import HeaderActions from "./HeaderActions";
import HeaderMenu from "./HeaderMenu";
import cn from "classnames";
import { useRouter } from "next/router";
import { useInjection } from "inversify-react";
import Social from "../Social";
import { observer } from "mobx-react";
import "@farcaster/auth-kit/styles.css";
// import { SignInButton, StatusAPIResponse } from "@farcaster/auth-kit";

import story from "../../styles/story.module.scss";
import { SignInButton, useProfile, useSignIn } from "@farcaster/auth-kit";
import { Web3Store } from "../../stores/Web3Store";
import classNames from "classnames";
import axios from "axios";
import { GalleryStore } from "../../stores/GalleryStore";
import Link from "next/link";
import { addressSlice } from "../../utils/utilities";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useDisconnect } from "wagmi";
import ConnectButtonCustom from "./connectButtonCustom";
// import { SignInButton } from "@farcaster/auth-kit";
interface HeaderProps {
  routerPath: string;
  csrfToken: string;
}

const Header: FC<HeaderProps> = observer((props) => {
  console.log(props.csrfToken);
  const [menu, setMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const web3store = useInjection(Web3Store);
  const galleryStore = useInjection(GalleryStore);
  const [active, setActive] = useState("");
  useEffect(() => {
    console.log(router.asPath);
    if (router.asPath.includes("sleeping") || router.asPath.includes("awake")) {
      setActive("active");
    } else if (router.asPath.includes("story")) {
      setActive("story");
    } else if (router.asPath.includes("mint")) {
      setActive("mint");
    } else if (router.asPath.includes("gallery/")) {
      setActive("nft");
    } else if (router.asPath.includes("gallery")) {
      setActive("gallery");
    } else if (router.asPath.includes("leaderboard")) {
      setActive("leaderboard");
    } else if (router.asPath == "/") {
      setActive("");
    }
  }, [router.asPath]);

  const closeMenuHandler = () => {
    setOpenMenu(false);
  };
  const logout = () => {
    web3store.setFarcasterUser(null);
    localStorage.removeItem("farcasterProfile");
    setMenu(false);
    galleryStore.setCharacters([]);
    galleryStore.setChar(null);
    if (router.asPath.includes("gallery")) {
      router.push("/");
    }
  };
  const { disconnect } = useDisconnect();
  const logoutAddress = () => {
    disconnect();
    console.log("hi disconnect");
    setMenu(false);
    web3store.setAddress(null);
    galleryStore.setCharacters([]);
    galleryStore.setChar(null);
    if (router.asPath.includes("gallery")) {
      router.push("/");
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__line}>
        <div
          className={styles.headerBurger}
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          <div
            className={cn(
              styles.headerBurger__box,
              openMenu && styles.headerBurger__box_active
            )}
          >
            <div>Menu</div>
          </div>
        </div>
        <div className={classNames(active == "nft" && styles.inactive)}>
          {<AudioPlayer routerPath={props.routerPath} />}
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <HeaderActions
            active={active}
            routerPath={props.routerPath}
            // openMenuHandler={openMenuHandler}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            pointerEvents: "auto",
          }}
        >
          {/* {active == "" && <Social routerPath={props.routerPath} />} */}
          {/* {warpcasterUser && active !== "" && (
            <div className={styles.wrapcast}>
              <img src={warpcasterUser?.pfp_url} />@
              {warpcasterUser?.display_name}
            </div>
          )} */}
          {/* {console.log(web3store.farcasterUser)} */}
          {console.log(web3store.address)}
          {!web3store.farcasterUser && !web3store.address ? (
            <>
              <div style={{ opacity: 1, color: "white" }}>
                <Link href={"/connect"}>
                  <button className={styles.wrapcast__connect}>Connect</button>
                </Link>
              </div>
              <div style={{ display: "none" }}>
                <ConnectButtonCustom />
              </div>
            </>
          ) : (
            <div className={styles.user}>
              {web3store.farcasterUser?.username ? (
                <div className={styles.wrapcast} onClick={() => setMenu(!menu)}>
                  @{web3store.farcasterUser?.username}
                  <img src={web3store.farcasterUser?.pfp_url} />
                </div>
              ) : (
                <div
                  className={styles.wrapcast__address}
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  {addressSlice(web3store.address)}
                </div>
              )}
              <div
                className={styles.logout}
                onClick={() => {
                  if (web3store.farcasterUser) {
                    logout();
                  } else {
                    logoutAddress();
                  }
                }}
                style={{
                  opacity: menu ? 1 : 0,
                  pointerEvents: menu ? "auto" : "none",
                }}
              >
                Logout
              </div>
            </div>
          )}
          {/* {props.csrfToken ? (
            <div style={{opacity:0}}>
            <SignInButton
              nonce={props.csrfToken}
              onSuccess={handleSuccess}
              onError={() => setError(true)}
              onSignOut={() => signOut()}
            />
            </div>
          ) : (
            "error"
          )}  */}

          {/* <div className={story.story__explore}>Connect Farcaster</div> */}
        </div>
      </div>
      {}
      <HeaderMenu
        routerPath={props.routerPath}
        openMenu={openMenu}
        closeMenuHandler={closeMenuHandler}
      />
    </header>
  );
});

export default Header;

// <div className={`${styles.burger} ${openMenu ? styles.burger_active : ''}`} onClick={() => setOpenMenu(prev => !prev)}>
// <span></span>
// <span></span>
// <span></span>
// </div>
