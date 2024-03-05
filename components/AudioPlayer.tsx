import cn from "classnames";
import { Howl } from "howler";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { isIOS } from "../hooks/isIOS";
import styles from "../styles/audio.module.scss";

interface AudioPlayerProps {
  // prevPath: string
  routerPath: string;
}

const AudioPlayer: FC<AudioPlayerProps> = ({ routerPath }) => {
  const router = useRouter();
  const [prevPath, setPrevPath] = useState("");

  useEffect(() => {
    return () => {
      setPrevPath(router.asPath.split(/[/]|[#]/)[1]);
    };
  }, [router]);

  const [play, setPlay] = useState(false);

  const soundAwake = new Howl({
    src: "/music/awake.mp3",
    html5: true,
    preload: "metadata",
    loop: true,
  });

  const soundSleeping = new Howl({
    src: "/music/sleeping.mp3",
    html5: true,
    preload: "metadata",
    loop: true,
  });

  const soundTerminal = new Howl({
    src: "/music/terminal.mp3",
    html5: true,
    preload: "metadata",
    loop: true,
  });

  const [awakeID] = useState(soundAwake);
  const [sleepingID] = useState(soundSleeping);
  const [terminalID] = useState(soundTerminal);

  useEffect(() => {
    if (routerPath === "sleeping") {
      sleepingID.fade(0, 1, 2000);
    } else if (routerPath === "awake") {
      awakeID.fade(0, 1, 2000);
    } else if (routerPath === "terminal") {
      terminalID.fade(0, 1, 2000);
    }
  }, [routerPath]);

  useEffect(() => {
    if (routerPath === "sleeping") {
      terminalID.fade(1, 0, 0);
      awakeID.fade(1, 0, 0);
    } else if (routerPath === "awake") {
      terminalID.fade(1, 0, 0);
      sleepingID.fade(1, 0, 0);
    } else if (routerPath === "terminal") {
      awakeID.fade(1, 0, 0);
      sleepingID.fade(1, 0, 0);
    } else {
      awakeID.fade(1, 0, 0);
      sleepingID.fade(1, 0, 0);
      terminalID.fade(1, 0, 0);
    }
  }, []);

  useEffect(() => {
    // if (prevPath === 'story') return

    // if (prevPath === 'sleeping' && routerPath !== prevPath) {
    // 	sleepingID.fade(1, 0, 1000)
    // } else if (prevPath === 'sleeping' && routerPath === 'sleeping') {
    // 	sleepingID.fade(1, 0.5, 800)
    // 	setTimeout(() => {
    // 		sleepingID.fade(0.5, 1, 500)
    // 	}, 800);
    // } else if (prevPath === 'awake' && routerPath !== prevPath) {
    // 	awakeID.fade(1, 0, 1000)
    // } else if (prevPath === 'terminal' && routerPath !== prevPath) {
    // 	terminalID.fade(1, 0, 1000)
    // }
    if (routerPath === prevPath) return;

    if (prevPath === "sleeping") {
      sleepingID.fade(1, 0, 1000);
    } else if (prevPath === "awake") {
      awakeID.fade(1, 0, 1000);
    } else if (prevPath === "terminal") {
      terminalID.fade(1, 0, 1000);
    }
  }, [prevPath]);

  const soundAction = () => {
    if (!play) {
      awakeID.play();
      sleepingID.play();
      terminalID.play();
      setPlay(true);
    } else {
      awakeID.pause();
      sleepingID.pause();
      terminalID.pause();
      setPlay(false);
    }
  };

  //   if (isIOS() || routerPath === "story") {
  //     return <div></div>;
  //   }

  return (
    <div
      className={cn(
        styles.audio,

        styles.audio_terminal
      )}
      onClick={soundAction}
    >
      {!play ? (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
          <path
            d="M1.99999 21L1.99999 11L6.49999 11L15 6L15 26L6.49999 21L1.99999 21Z"
            stroke="white"
          />
          <path d="M30.3135 10L18.9998 21.3137" stroke="white" />
          <path d="M19 10L30.3137 21.3137" stroke="white" />
        </svg>
      ) : (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
          <path
            d="M1.99999 21L1.99999 11L6.49999 11L15 6L15 26L6.49999 21L1.99999 21Z"
            stroke="white"
          />
          <path
            d="M22.5922 27.0862C24.0481 26.4831 25.371 25.5992 26.4853 24.4849C27.5996 23.3706 28.4835 22.0477 29.0866 20.5918C29.6896 19.1359 30 17.5755 30 15.9996C30 14.4238 29.6896 12.8633 29.0866 11.4074C28.4835 9.95153 27.5996 8.62866 26.4853 7.51436C25.371 6.40006 24.0481 5.51614 22.5922 4.91309"
            stroke="white"
          />
          <path
            d="M20.2961 21.5436C21.0241 21.2421 21.6855 20.8001 22.2426 20.2429C22.7998 19.6858 23.2417 19.0244 23.5433 18.2964C23.8448 17.5685 24 16.7882 24 16.0003C24 15.2124 23.8448 14.4322 23.5433 13.7042C23.2417 12.9763 22.7998 12.3148 22.2426 11.7577C21.6855 11.2005 21.0241 10.7586 20.2961 10.457"
            stroke="white"
          />
        </svg>
      )}
      <span>Sleeper OST</span>
    </div>
  );
};

export default AudioPlayer;
