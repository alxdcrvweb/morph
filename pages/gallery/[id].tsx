import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import { GalleryStore } from "../../stores/GalleryStore";
import { Web3Store } from "../../stores/Web3Store";
import { chainId } from "../../config/config";
import style from "../../styles/gallery.module.scss";
import { addressSlice } from "../../utils/utilities";
import { useRouter } from "next/router";
import classNames from "classnames";
import OneImage from "../../components/Gallery/oneImage";
import { RotatingLines } from "react-loader-spinner";
import { useInView } from "react-intersection-observer";

import Head from "next/head";
import BackButton from "../../components/Header/backButton";
const imageUrl = `http://localhost:3000/testNft.jpg`;
export const runtime = "experimental-edge";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  return { props: { id } };
};

const GalleryPage: React.FC = observer((props) => {
  const web3store = useInjection(Web3Store);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const galleryStore = useInjection(GalleryStore);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);

  const [characterList, setCharacterList] = useState<any>([]);
  const [faction, setFaction] = useState("all");
  const [details, setDetails] = useState<any>({});
  const [oneChar, setOneChar] = useState<any>(undefined);
  const [updated, setUpdated] = useState(false);
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
          //@ts-ignore
          galleryStore.setCharacters(c);
          break;
        }
      }
    }
  };
  const checkOne = async () => {
    try {
      await galleryStore.getCharacters(web3store.address, chainId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let tt = setTimeout(() => {
      setLoad(inView);
    }, 1000);
    return () => clearTimeout(tt);
  }, [inView]);
  useEffect(() => {
    if (web3store?.farcasterUser?.custody_address && !updated) {
      setUpdated(true);
      checkChars();
    } else if (web3store.address) {
      checkOne();
    }
  }, [web3store?.farcasterUser?.custody_address, web3store.address]);
  useEffect(() => {
    setCharacterList(galleryStore.characters);
    if (!galleryStore.char && galleryStore.characters.length !== 0) {
      console.log("object1");
      galleryStore.setChar(router.asPath.split("/")[2]);
      // setShow(true);
    } else if (galleryStore.characters.length == 0) {
      galleryStore.setChar(router.asPath.split("/")[2]);
    }
  }, [galleryStore.characters, load]);
  useEffect(() => {
    // let tt = setTimeout(() => {
    //   setShow(false);
    // }, 1000);
    // if (!galleryStore.char) {
    console.log("object131");
    // setShow(true);
    // }
    // return () => {
    //   clearTimeout(tt);
    // };
  }, [router.asPath]);
  useEffect(() => {
    console.log("object2", galleryStore.char);
    setOneChar(galleryStore.char);
  }, [galleryStore.char, load]);
  useEffect(() => {
    console.log("object3");
    setDetails({});
    oneChar?.attributes?.map((el: any) => {
      setDetails((prev) => ({ ...prev, [el.trait_type]: el.value }));
    });
  }, [oneChar]);
  console.log(galleryStore.char, load);

  return (
    <div className={style.gallery__container__one} ref={ref}>
      {/* <WarpcasterFrame /> */}
      <Head>
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:button:1" content="Opensea" />
        <meta name="fc:frame:button:1:action" content="link" />
        <meta
          name="fc:frame:button:1:target"
          /* @ts-ignore */
          content={`https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/${props?.id}`}
        />
        <meta name="fc:frame:button:2" content="Profile" />
        <meta name="fc:frame:button:2:action" content="link" />
        <meta
          name="fc:frame:button:2:target"
          /* @ts-ignore */
          content={`https://www.mrphs.io/gallery/${props?.id}`}
        />
        <meta
          name="fc:frame:image"
          /* @ts-ignore */
          content={"https://www.mrphs.io/api/getNftById?id=" + props?.id}
        />
        <meta name="fc:frame:image:aspect_ratio" content="1:1" />
      </Head>
      <BackButton />
      {/* {console.log(router.asPath.replace("/gallery/", ""))} */}
      <div className={style.gallery__one}>
        <div className={style.gallery__col}>
          <div>
            <img
              className={style.gallery__img}
              // style={{ opacity: load ? 1 : 0 }}
              key={oneChar?.image}
              /* @ts-ignore */

              src={"/api/getNftById?id=" + props?.id}
              // onLoad={(e) => {
              //   console.log('load?');
              //   setLoad(true);
              // }}
            />
            <div className={style.gallery__loader__big}>
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={false}
              />
            </div>
          </div>
          <div className={style.gallery__info}>
            <div className={style.gallery__row}>
              <div>{details.faction}</div>
              <div>???</div>
              <a
                target="_blank"
                href={`https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/${oneChar?.id}`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3196_344)">
                    <path
                      d="M17.9998 8.99988C17.9998 13.9701 13.9701 17.9998 8.99988 17.9998C4.02966 17.9998 0 13.9701 0 8.99988C0 4.02966 4.02966 0 8.99988 0C13.9711 0 17.9998 4.02966 17.9998 8.99988Z"
                      fill="#C4C4C4"
                    />
                    <path
                      d="M4.43962 9.30241L4.47844 9.24137L6.81967 5.57882C6.85389 5.5252 6.93433 5.53074 6.96021 5.58899C7.35135 6.46556 7.68884 7.55573 7.53073 8.23443C7.46323 8.51368 7.2783 8.89185 7.07024 9.24137C7.04344 9.29224 7.01385 9.34217 6.98241 9.39025C6.96761 9.41244 6.94264 9.42538 6.91583 9.42538H4.50803C4.44331 9.42538 4.4054 9.35511 4.43962 9.30241Z"
                      fill="#0F0F0F"
                    />
                    <path
                      d="M14.8761 9.98274V10.5625C14.8761 10.5958 14.8558 10.6254 14.8262 10.6383C14.645 10.716 14.0245 11.0008 13.7665 11.3595C13.1082 12.2759 12.6052 13.5861 11.4808 13.5861H6.79001C5.1275 13.5861 3.78027 12.2343 3.78027 10.5662V10.5126C3.78027 10.4682 3.81633 10.4321 3.86071 10.4321H6.47565C6.52741 10.4321 6.56532 10.4802 6.56071 10.5311C6.54221 10.7012 6.57365 10.875 6.6541 11.0331C6.80943 11.3485 7.13121 11.5454 7.47888 11.5454H8.7734V10.5348H7.49367C7.42803 10.5348 7.38921 10.4589 7.42711 10.4053C7.44097 10.384 7.4567 10.3619 7.47334 10.3369C7.59447 10.1649 7.76738 9.89768 7.93937 9.59346C8.0568 9.3882 8.17052 9.16905 8.26207 8.94898C8.28057 8.90922 8.29535 8.86852 8.31014 8.82876C8.33511 8.75849 8.36101 8.69285 8.3795 8.6272C8.398 8.57171 8.41278 8.51346 8.42757 8.4589C8.47104 8.27212 8.48953 8.07425 8.48953 7.86898C8.48953 7.78854 8.48584 7.70439 8.47844 7.62395C8.47473 7.53611 8.46365 7.44825 8.45254 7.36041C8.44514 7.28275 8.43128 7.206 8.41649 7.12555C8.398 7.00812 8.3721 6.89163 8.34251 6.77418L8.33234 6.72981C8.31014 6.64935 8.29166 6.57262 8.26577 6.49218C8.19271 6.23973 8.10858 5.99378 8.01981 5.76355C7.98744 5.672 7.95046 5.58416 7.91347 5.49633C7.85893 5.3641 7.80343 5.2439 7.75258 5.13016C7.7267 5.07837 7.70451 5.03121 7.68231 4.98313C7.65735 4.92858 7.63146 4.87402 7.60556 4.82225C7.58708 4.78249 7.5658 4.7455 7.551 4.70851L7.39289 4.41632C7.3707 4.37656 7.40769 4.3294 7.45114 4.34143L8.44053 4.60957H8.44331C8.44514 4.60957 8.44608 4.6105 8.447 4.6105L8.57737 4.64656L8.7207 4.68725L8.7734 4.70203V4.11396C8.7734 3.83009 9.00087 3.59985 9.28197 3.59985C9.42251 3.59985 9.55011 3.65718 9.64166 3.75057C9.73319 3.84397 9.79052 3.97157 9.79052 4.11396V4.98684L9.89594 5.01642C9.90426 5.01921 9.91257 5.0229 9.91997 5.02844C9.94587 5.04786 9.98284 5.07652 10.03 5.11167C10.067 5.14124 10.1068 5.17732 10.1548 5.2143C10.2501 5.29104 10.3638 5.38998 10.4886 5.50372C10.5219 5.53238 10.5543 5.56197 10.5839 5.59156C10.7448 5.74136 10.9251 5.91703 11.0971 6.11121C11.1451 6.16577 11.1923 6.22125 11.2404 6.27949C11.2885 6.33868 11.3393 6.39692 11.3837 6.45519C11.442 6.53286 11.5048 6.6133 11.5594 6.69745C11.5853 6.73721 11.6149 6.77789 11.6398 6.81765C11.7101 6.92397 11.7721 7.03403 11.8312 7.14406C11.8562 7.19491 11.8821 7.25038 11.9043 7.30494C11.9699 7.45196 12.0217 7.60176 12.055 7.75155C12.0652 7.78391 12.0726 7.81905 12.0763 7.85049V7.85789C12.0874 7.90226 12.0911 7.94942 12.0948 7.9975C12.1095 8.151 12.1022 8.30448 12.0689 8.4589C12.055 8.52457 12.0365 8.5865 12.0143 8.65217C11.9921 8.71504 11.9699 8.78068 11.9413 8.84264C11.8858 8.97116 11.8201 9.09969 11.7425 9.2199C11.7175 9.26428 11.6879 9.31144 11.6583 9.35583C11.6259 9.40297 11.5927 9.44736 11.5631 9.49083C11.5224 9.5463 11.4789 9.60455 11.4346 9.65634C11.3948 9.71089 11.3541 9.76545 11.3097 9.81353C11.2478 9.88657 11.1886 9.95592 11.1266 10.0225C11.0897 10.066 11.0499 10.1103 11.0092 10.1501C10.9695 10.1945 10.9288 10.2342 10.8918 10.2712C10.8298 10.3332 10.7781 10.3813 10.7346 10.421L10.6329 10.5144C10.6181 10.5274 10.5987 10.5348 10.5783 10.5348H9.79052V11.5454H10.7817C11.0037 11.5454 11.2145 11.4668 11.3846 11.3226C11.4429 11.2717 11.6972 11.0516 11.9977 10.7197C12.0078 10.7086 12.0208 10.7003 12.0356 10.6966L14.7735 9.90508C14.8243 9.89028 14.8761 9.9291 14.8761 9.98274Z"
                      fill="#0F0F0F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3196_344">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              {/* <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.72727 14.2726C2.22727 14.2726 1.79939 14.0947 1.44364 13.739C1.08727 13.3826 0.909091 12.9544 0.909091 12.4544V2.45441C0.909091 1.95441 1.08727 1.52623 1.44364 1.16987C1.79939 0.814109 2.22727 0.63623 2.72727 0.63623H17.2727C17.7727 0.63623 18.2009 0.814109 18.5573 1.16987C18.913 1.52623 19.0909 1.95441 19.0909 2.45441V12.4544C19.0909 12.9544 18.913 13.3826 18.5573 13.739C18.2009 14.0947 17.7727 14.2726 17.2727 14.2726H2.72727ZM0.909091 16.9999C0.651515 16.9999 0.435758 16.9126 0.261818 16.738C0.0872727 16.5641 0 16.3484 0 16.0908C0 15.8332 0.0872727 15.6174 0.261818 15.4435C0.435758 15.269 0.651515 15.1817 0.909091 15.1817H19.0909C19.3485 15.1817 19.5642 15.269 19.7382 15.4435C19.9127 15.6174 20 15.8332 20 16.0908C20 16.3484 19.9127 16.5641 19.7382 16.738C19.5642 16.9126 19.3485 16.9999 19.0909 16.9999H0.909091Z"
                fill="#C4C4C4"
              />
            </svg> */}
            </div>
            <div className={style.gallery__name}>{oneChar?.name}</div>
            <div className={style.gallery__wake}>Wake Up date: 27.02.24</div>
            <div className={style.gallery__stats}>
              <div className={style.gallery__stats__row}>
                <div>Owner</div>
                <div className={style.gallery__stats__dots}></div>
                <a
                  href={`https://basescan.org/address/${oneChar?.owner}`}
                  target="_blank"
                  className={style.gallery__stats__dots}
                >
                  {addressSlice(oneChar?.owner)}
                </a>
              </div>
              <div className={style.gallery__stats__row}>
                <div>Faction</div>
                <div className={style.gallery__stats__dots}></div>
                <div>{details.faction}</div>
              </div>
              <div className={style.gallery__stats__row}>
                <div>{details.faction == "sleeper" ? "Mirage" : "Droid"}</div>
                <div className={style.gallery__stats__dots}></div>
                <div>
                  {(details.mirage
                    ? details.mirage
                    : details.droids
                    ? details.droids
                    : "None"
                  ).replace("oberver", "observer")}
                </div>
              </div>
              <div className={style.gallery__stats__row}>
                <div>Faction power</div>
                <div className={style.gallery__stats__dots}></div>
                <div>???</div>
              </div>
            </div>
            <div
              className={style.gallery__detail}
              onClick={() => {
                setShow(!show);
              }}
            >
              Character detail
              <img src="/chevron.svg" />
            </div>
            <div className={style.gallery__stats} style={{ marginTop: "30px" }}>
              {show &&
                oneChar?.attributes?.map((el: any) => {
                  if (
                    el.trait_type == "faction" ||
                    el.trait_type == "mirage" ||
                    el.trait_type == "droids"
                  )
                    return null;
                  return (
                    <div
                      className={classNames(
                        style.gallery__stats__row,
                        style.gallery__second__row
                      )}
                      key={el.trait_type}
                    >
                      <div>{el.trait_type}</div>
                      <div
                        className={classNames(
                          style.gallery__stats__dots,
                          style.gallery__second__dots
                        )}
                      ></div>
                      <div>{el.value}</div>
                    </div>
                  );
                })}
              {/* <div className={style.gallery__stats__row}>
              <div>Faction power</div>
              <div className={style.gallery__stats__dots}></div>
              <div>???</div>
            </div> */}
            </div>
            {characterList.length !== 0 && (
              <>
                <div className={style.gallery__story}>Story</div>
                <img className={style.gallery__soon} src="/soon.png" />
              </>
            )}
          </div>
        </div>
        {characterList.length !== 0 ? (
          <div className={style.gallery__right}>
            <div className={style.gallery__char}>
              Characters
              <img src="/leaderboard/showdown.svg" />
            </div>
            <div className={style.gallery__row}>
              <div
                className={classNames(
                  faction == "all" && style.gallery__active
                )}
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
            <div className={classNames(style.gallery, style.gallery__others)}>
              {characterList
                .filter((el) => {
                  if (faction == "all") return true;
                  let fa = el.attributes.filter(
                    (el) => el.trait_type == "faction"
                  );
                  // console.log(fa);
                  return fa[0].value == faction;
                })
                .map((el: any, i: number) => {
                  // console.log(".filter(el=> el.)", el);
                  return <OneImage el={el} key={i} />;
                })}
              {/* Add your gallery content here */}
            </div>
          </div>
        ) : (
          <div
            className={classNames(style.gallery__right, style.gallery__soon2)}
          >
            <div className={style.gallery__story}>Story</div>
            <img className={style.gallery__soon} src="/soon.png" />
          </div>
        )}
      </div>
    </div>
  );
});

export default GalleryPage;
