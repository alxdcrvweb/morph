import { FC, useEffect, useState } from "react";
import styles from "../../styles/header.module.scss";
import AudioPlayer from "../AudioPlayer";
import HeaderActions from "./HeaderActions";
import HeaderMenu from "./HeaderMenu";
import cn from "classnames";
import { useRouter } from "next/router";
import { useInjection } from "inversify-react";
import { UserStore } from "../../stores/UserStore";
import Social from "../Social";
import { observer } from "mobx-react";

interface HeaderProps {
  routerPath: string;
}

const Header: FC<HeaderProps> = observer(({ routerPath }) => {
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
  const openMenuHandler = () => {
    setOpenMenu(true);
  };

  const closeMenuHandler = () => {
    setOpenMenu(false);
  };
  const { warpcasterUser } = useInjection(UserStore);
  return (
    <header className={styles.header}>
      <div className={styles.header__line}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {active == "active" && <AudioPlayer routerPath={routerPath} />}
          <HeaderActions
            active={active}
            routerPath={routerPath}
            // openMenuHandler={openMenuHandler}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {active !== "mint" && <Social routerPath={routerPath} />}
          {warpcasterUser && active !== "" && (
            <div className={styles.wrapcast}>
              <img src={warpcasterUser?.pfp_url} />@
              {warpcasterUser?.display_name}
            </div>
          )}
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
        routerPath={routerPath}
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
