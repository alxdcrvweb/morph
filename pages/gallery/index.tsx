import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import { GalleryStore } from "../../stores/GalleryStore";
import { Web3Store } from "../../stores/Web3Store";
import { chainId } from "../../config/config";
import style from "../../styles/gallery.module.scss";
import OneImage from "./oneImage";
import classNames from "classnames";
const GalleryPage: React.FC = observer(() => {
  const galleryStore = useInjection(GalleryStore);
  const web3store = useInjection(Web3Store);
  const [char, setChar] = useState<any>([]);
  const [faction, setFaction] = useState("all");
  const [updated, setUpdated] = useState(false)
  // const f = async () => {
  //   console.log("hi function");
  //   const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  //   for (let i = 0; i < 10; i++) {
  //     console.log(i);
  //     await delay(1000);
  //   }
  // };
  const checkChars = async () => {
    console.log("HI CHECK", updated);
    const addresses = [
      web3store.farcasterUser?.custody_address,
      ...web3store.farcasterUser.verified_addresses.eth_addresses,
    ];
    const check = (address: string) =>
      new Promise((resolve) =>
        resolve(galleryStore.getCharacters(address, chainId))
      );
    for (let i = 0; i <= addresses.length; i++) {
      console.log(addresses[i]);
      if (addresses[i]) {
        let c = await check(addresses[i]);
        //@ts-ignore
        if (c?.length > 0) {
          console.log("hi result", c);
          galleryStore.setCharacters(c);
          break;
        }
      }
    }
  };
  useEffect(() => {
    if (web3store?.farcasterUser?.custody_address && !updated) {
      setUpdated(true)
      checkChars();
    }
  }, [web3store?.farcasterUser?.custody_address]);
  // useEffect(() => {
  //   // f();
  //   if (web3store.farcasterUser.custody_address) {
  //     checkChars();
  //   }
  // }, []);
  useEffect(() => {
    setChar(galleryStore.characters);
  }, [galleryStore.characters]);
  // console.log(galleryStore.characters);
  return (
    <div className={style.gallery__container}>
      <div>
        <div className={style.gallery__char}>
          Characters
          <img src="/leaderboard/showdown.svg" />
        </div>
        <div className={style.gallery__row}>
          <div
            className={classNames(faction == "all" && style.gallery__active)}
            onClick={() => {
              setFaction("all");
            }}
          >
            all
          </div>
          <div
            className={classNames(
              faction == "vigilant" && style.gallery__active
            )}
            onClick={() => {
              setFaction("vigilant");
            }}
          >
            vigilant
          </div>
          <div
            className={classNames(
              faction == "sleeper" && style.gallery__active
            )}
            onClick={() => {
              setFaction("sleeper");
            }}
          >
            sleeper
          </div>
        </div>
        <div className={style.gallery}>
          {char
            .filter((el) => {
              if (faction == "all") return true;
              let fa = el.attributes.filter((el) => el.trait_type == "faction");
              console.log(fa);
              return fa[0].value == faction;
            })
            .map((el: any, i: number) => {
              // console.log(".filter(el=> el.)", el);
              return <OneImage el={el} key={i} />;
            })}
          {/* Add your gallery content here */}
        </div>
      </div>
      {/* Add your gallery content here */}
    </div>
  );
});

export default GalleryPage;
