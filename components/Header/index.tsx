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
// import { SignInButton } from "@farcaster/auth-kit";
interface HeaderProps {
  routerPath: string;
  csrfToken: string;
}

const Header: FC<HeaderProps> = observer((props) => {
  console.log(props.csrfToken);
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const web3store = useInjection(Web3Store);
  const { isAuthenticated, profile } = useProfile();
  const sign = useSignIn({
    onSuccess: ({ fid }) => console.log("Your fid:", fid),
  });
  console.log(sign);
  console.log(isAuthenticated, profile);
  useEffect(() => {
    if (isAuthenticated && JSON.stringify(profile) !== "{}") {
      console.log(profile);
      localStorage.setItem("farcasterProfile", JSON.stringify(profile));
      web3store.setFarcasterUser(profile);
    }
  }, [isAuthenticated, profile]);
  useEffect(() => {
    let profile = localStorage.getItem("farcasterProfile");
    console.log(profile);
    if (profile && profile !== "{}") {
      web3store.setFarcasterUser(JSON.parse(profile));
      console.log(JSON.parse(localStorage.getItem("farcasterProfile")));
    }
  }, []);
  const [active, setActive] = useState("");
  useEffect(() => {
    console.log(router.asPath);
    if (router.asPath.includes("sleeping") || router.asPath.includes("awake")) {
      setActive("active");
    } else if (router.asPath.includes("story")) {
      setActive("story");
    } else if (router.asPath.includes("mint")) {
      setActive("mint");
    }
  }, [router.asPath]);

  const closeMenuHandler = () => {
    setOpenMenu(false);
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
        {<AudioPlayer routerPath={props.routerPath} />}

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
          {!web3store.farcasterUser ? (
            <div style={{ opacity: 1, color: "white" }}>
              <SignInButton
                onSuccess={(profile) => {
                  console.log(profile, "profile");
                  web3store.setFarcasterUser(profile);
                }}
              />
            </div>
          ) : (
            <div className={styles.wrapcast}>
              @{web3store.farcasterUser?.username}
              <img src={web3store.farcasterUser?.pfpUrl} />
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
