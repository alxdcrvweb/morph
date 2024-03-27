import gsap from "gsap";
import Observer from "gsap/dist/Observer";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { LocomotiveScrollProvider, Scroll } from "react-locomotive-scroll";
import decor1 from "../public/showdown/decor1.svg";
import decor2 from "../public/showdown/decor2.svg";
import AboutPageLink from "./AboutPageLink";
import Header from "./Header";
import BackLink from "./StoryBackLink";
import { useInjection } from "inversify-react";
import axios from "axios";
import { Web3Store } from "../stores/Web3Store";
import { useProfile, useSignIn } from "@farcaster/auth-kit";
// import { getCsrfToken } from "next-auth/react";

gsap.registerPlugin(ScrollTrigger, Observer);

interface MyHead {
  props: { csrfToken: string };
  children: ReactElement;
}

export default function MainLayout({ children, props }: MyHead) {
  console.log(props);
  const router = useRouter();
  const [prevPath, setPrevPath] = useState("");
  const routerPathName = router.asPath.split("/")[1];
  const mainRef = useRef(null);
  const web3store = useInjection(Web3Store);
  const { isAuthenticated, profile } = useProfile();
  const checkProfile = async (fid: number) => {
    try {
      const response = await axios.get(`/api/getUsers?fid=${fid}`);
      console.log(response.data);
      localStorage.setItem(
        "farcasterProfile",
        JSON.stringify(response.data.users[0])
      );
      web3store.setFarcasterUser(response.data.users[0]);
    } catch (error) {
      console.error("error", error);
    }

    // console.log("HIIIII", response);
  };
  useEffect(() => {
    if (isAuthenticated && JSON.stringify(profile) !== "{}") {
      checkProfile(profile.fid);
    }
  }, [isAuthenticated, profile]);
  useEffect(() => {
    let profile = localStorage.getItem("farcasterProfile");
    console.log(profile);
    if (
      profile &&
      profile !== "{}" &&
      JSON.parse(profile)?.custody == undefined
    ) {
      web3store.setFarcasterUser(JSON.parse(profile));
      // console.log(profile);
    }
  }, []);

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
          touchMultiplier: 2,
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
        <Header routerPath={routerPathName} csrfToken={props.csrfToken} />
        <main data-scroll-container ref={mainRef}>
          {children}
        </main>
        {(router.asPath === "/sleeping" || router.asPath === "/awake") && (
          <AboutPageLink />
        )}
        {/* {(router.asPath === "/story/1" ||
          router.asPath.split("/")[1] === "terminal") && <BackLink />} */}
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
