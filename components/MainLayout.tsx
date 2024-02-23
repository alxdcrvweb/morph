import gsap from "gsap";
import Observer from "gsap/dist/Observer";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider, Scroll } from "react-locomotive-scroll";
import decor1 from "../public/showdown/decor1.svg";
import decor2 from "../public/showdown/decor2.svg";
import AboutPageLink from "./AboutPageLink";
import Header from "./Header";
import BackLink from "./StoryBackLink";
import { UserStore } from "../stores/UserStore";
import { useInjection } from "inversify-react";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger, Observer);

interface MyHead {
  children: ReactElement;
}

export default function MainLayout({ children }: MyHead) {
  const router = useRouter();
  const [prevPath, setPrevPath] = useState("");
  const routerPathName = router.asPath.split("/")[1];
  const mainRef = useRef(null);
  const userStore = useInjection(UserStore);
  const getUserById = async (id: string | null) => {
    try {
      const response = await axios.get(
        `https://api.neynar.com/v2/farcaster/user/bulk?fids=${id}&viewer_fid=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            api_key: process.env.NEYNAR_API_KEY as string,
          },
        }
      );
      userStore.setWarpcasterUser(response.data);
    } catch (error) {
      console.error("error", error);
    }

    // console.log("HIIIII", response);
  };
  useEffect(() => {
    if (localStorage.getItem("id") && !userStore.warpcasterUser) {
      let id = localStorage.getItem("id");
      getUserById(id);
    }
  }, [localStorage.getItem("id")]);
  // const [locoScroll, setLocoScroll] = useState<Scroll>()

  // useEffect(() => {

  // 	if (!locoScroll) return
  // 	const call = () => locoScroll.update()

  // 	ScrollTrigger.addEventListener("refresh", call);
  // 	ScrollTrigger.refresh();

  // 	return () => { ScrollTrigger.removeEventListener("refresh", call) }

  // }, [locoScroll])

  // const locationChangeHandler = useCallback((scroll: Scroll) => {
  // 	console.log('================== locationChangeHandler');

  // 	console.log('prevPath', prevPath);
  // 	console.log('prevPath.split(/[/]/)[1]', prevPath.split(/[/]/)[1]);
  // 	console.log('routerPathName', routerPathName);
  // 	console.log('boool', (prevPath.split('/')[1] === 'story' || routerPathName === 'story'));
  // 	console.log('locationChangeHandler ==================');

  // 	if (prevPath.split(/[/]/)[1] === 'story' || router.asPath.split('/')[1] === 'story') scroll.scrollTo(0, { duration: 0, disableLerp: true })

  // }, [prevPath])

  // useEffect(() => {
  // 	console.log('useEffect prevPath', prevPath);

  // }, [prevPath])

  useEffect(() => {
    return () => setPrevPath(router.asPath);
  }, [router]);

  return (
    <>
      <Head>
        <title>
          {`${
            routerPathName.slice(0, 1).toUpperCase() +
              routerPathName.slice(1) || "Morpheus NFT"
          }`}{" "}
          | Morpheus
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="NFT, Morpheus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          touchMultiplier: 5,
          smartphone: {
            breakpoint: 0,
            smooth: true,
          },
          tablet: {
            breakpoint: 0,
            smooth: true,
          },
        }}
        watch={[]}
        onUpdate={(locoScroll: Scroll) => {
          locoScroll.on("scroll", ScrollTrigger.update);
          // setLocoScroll(locoScroll)
          const call = () => locoScroll.update();

          ScrollTrigger.addEventListener("refresh", call);
          ScrollTrigger.refresh();
          if (
            prevPath.split("/")[1] === "story" ||
            router.asPath.split("/")[1] === "story" ||
            prevPath.split("/")[1] === "terminal" ||
            router.asPath.split("/")[1] === "terminal"
          )
            locoScroll.scrollTo(0, { duration: 0, disableLerp: true });

          return () => {
            ScrollTrigger.removeEventListener("refresh", call);
          };
        }}
        containerRef={mainRef}
        // location={router.asPath}
        // onLocationChange={locationChangeHandler}
      >
        <Header routerPath={routerPathName} />
        <main data-scroll-container ref={mainRef}>
          {children}
        </main>
        {(router.asPath === "/sleeping" || router.asPath === "/awake") && (
          <AboutPageLink />
        )}
        {(router.asPath === "/story/1" ||
          router.asPath.split("/")[1] === "terminal") && <BackLink />}
        <div className={"_decor _decor_1"}>
          <Image
            src={decor1}
            alt=""
            layout="fixed"
            objectFit="cover"
            objectPosition={"center"}
          />
        </div>
        <div className={"_decor _decor_2"}>
          <Image
            src={decor2}
            alt=""
            layout="fixed"
            objectFit="cover"
            objectPosition={"center"}
          />
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}
