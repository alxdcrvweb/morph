import styles from "../../styles/header.module.scss";
import { FC, useEffect, useState } from "react";
import { getRandomIntInclusive } from "../../utils/utilities";
import AudioPlayer from "../AudioPlayer";
import Social from "../Social";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useRouter } from "next/router";
import classNames from "classnames";
import { observer } from "mobx-react";
import { Web3Store } from "../../stores/Web3Store";
import { useInjection } from "inversify-react";

interface HeaderMobileMenuProps {
  routerPath: string;
  closeMenuHandler: () => void;
}

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = observer(
  ({ routerPath, closeMenuHandler }) => {
    const [firstDigi, setFirstDigi] = useState<number | null>(null);
    const [secondDigi, setSecondDigi] = useState<number | null>(null);
    const router = useRouter();
    const web3store = useInjection(Web3Store);
    useEffect(() => {
      setFirstDigi(getRandomIntInclusive(0, "MORPHEUS".length - 1));
      setSecondDigi(getRandomIntInclusive(0, "MORPHEUS".length - 1));
    }, []);

    const menuList = [
      { id: 1, text: "Journey", pushTo: "/" },
      { id: 2, text: "Story", pushTo: "/story" },
      { id: 3, text: "Factions", pushTo: "/sleeping" },
      { id: 4, text: "Gallery", pushTo: "/gallery" },
      { id: 5, text: "Leaderboard", pushTo: "/leaderboard" },
    ];

    const handleClick = (pushTo: string) => {
      closeMenuHandler();
      router.push(pushTo);
      // scroll.scrollTo(scrollTo, { duration: 1, disableLerp: false })
    };

    return (
      <div className={styles.menu__box}>
        <div className={styles.menu__head}>
          <div className={styles.menu__title}>
            {"MORPHEUS".split("").map((letter, index) => {
              const classList =
                index === firstDigi || index === secondDigi ? "nostra" : "";
              return (
                <span key={letter} className={classList}>
                  {letter}
                </span>
              );
            })}
          </div>
          <img src="/close.svg" onClick={closeMenuHandler} />
        </div>
        <div className={styles.menu__main}>
          {menuList.map((el) => {
            return (
              <div
                key={el.id}
                className={classNames(
                  styles.menu__route,
                  el.text == "Gallery" &&
                    !web3store.farcasterUser &&
                    styles.disabled
                )}
                onClick={() => {
                  handleClick(el.pushTo);
                }}
              >
                {el.text}
              </div>
            );
          })}
          {/* <div className={styles.menu__info}>More features in desktop version</div> */}
        </div>
        <div className={styles.menu__footer}>
          <AudioPlayer routerPath={routerPath} />
          <Social routerPath={routerPath} />
        </div>
      </div>
    );
  }
);

export default HeaderMobileMenu;
