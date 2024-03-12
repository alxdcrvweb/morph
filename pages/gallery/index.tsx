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
  useEffect(() => {
    if (web3store.farcasterUser.custody) {
      galleryStore.getCharacters(web3store.farcasterUser.custody, chainId);
    }
  }, [web3store.farcasterUser]);
  useEffect(() => {
    if (web3store.farcasterUser.custody) {
      galleryStore.getCharacters(web3store.farcasterUser.custody, chainId);
    }
  }, []);
  useEffect(() => {
    setChar(galleryStore.characters);
  }, [galleryStore.characters]);
  console.log(galleryStore.characters);
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
              console.log(".filter(el=> el.)", el);
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
