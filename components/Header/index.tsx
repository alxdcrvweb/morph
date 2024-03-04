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
import { signIn, signOut } from "next-auth/react";
import { SignInButton } from "@farcaster/auth-kit";
// import { SignInButton } from "@farcaster/auth-kit";
interface HeaderProps {
  routerPath: string;
  csrfToken: string;
}

const Header: FC<HeaderProps> = observer((props) => {
  console.log(props.csrfToken);
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
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
        <div style={{ display: "flex", alignItems: "center" }}>
          {active == "active" && <AudioPlayer routerPath={props.routerPath} />}
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
          {active !== "mint" && <Social routerPath={props.routerPath} />}
          {/* {warpcasterUser && active !== "" && (
            <div className={styles.wrapcast}>
              <img src={warpcasterUser?.pfp_url} />@
              {warpcasterUser?.display_name}
            </div>
          )} */}
          <div style={{opacity:1}}>
            <SignInButton />
            </div>
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
      {active == "active" && (
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
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
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
