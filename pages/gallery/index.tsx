import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import { GalleryStore } from "../../stores/GalleryStore";
import { Web3Store } from "../../stores/Web3Store";
import { chainId } from "../../config/config";
import style from "../../styles/gallery.module.scss";
import OneImage from "./oneImage";
const GalleryPage: React.FC = observer(() => {
  const galleryStore = useInjection(GalleryStore);
  const web3store = useInjection(Web3Store);
  const [char, setChar] = useState<any>([]);
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
      <div className={style.gallery}>
        {char.map((el: any, i: number) => {
          return <OneImage el={el} key={i} />;
        })}
        {/* Add your gallery content here */}
      </div>
    </div>
  );
});

export default GalleryPage;
