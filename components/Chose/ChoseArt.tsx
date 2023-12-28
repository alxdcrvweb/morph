import cn from "classnames";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
// styles
import styles from "../../styles/awake.module.scss";
// images
import { IMAGES } from "../images";
import useWindowDimensions from "../../hooks/useDimensions";
import classNames from "classnames";
import { useRouter } from "next/router";
import ChoseFooter from "./choseFooter";

const { background, sleep, awake, light1, light2, light3 } = IMAGES.chose;

const { noise } = IMAGES.awake;
interface FirstAwakeArtProps {
  circle1Ref: MutableRefObject<SVGCircleElement | null>;
  circle2Ref: MutableRefObject<SVGCircleElement | null>;
  circle3Ref: MutableRefObject<SVGCircleElement | null>;
}

const ChoseArt: FC<FirstAwakeArtProps> = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [currentPos, setCurrentPos] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [active, setActive] = useState("");
  const ref = useRef() as any;
  useEffect(() => {
    if (width) {
      setCurrentPos(width / 2);
    } if(width<600) {
      router.push("/sleeping")
    }
  }, [width]);
  useEffect(() => {
    setOpacity(0);
  }, []);
  useEffect(() => {
    const precent = (width / 100) * 30;
    const choseLeft = precent;
    const choseRight = width - precent;
    if (currentPos < choseLeft) {
      setActive("awake");
    } else if (currentPos > choseRight) {
      setActive("sleep");
    } else {
      setActive("");
    }
  }, [currentPos]);
  console.log(active);
  return (
    <div
      className={cn(styles.awake__art, styles.awake__art_1)}
      style={{ cursor: active !== "" ? "pointer" : "auto" }}
      onMouseMove={(e) => {
        setCurrentPos(e.clientX);
      }}
      ref={ref}
      onClick={(e) => {
        console.log(ref);
        if (active == "sleep") {
          // ref.current.scrollTo({ top: 0, behavior: 'smooth' });
          router.push("/sleeping");
        } else if (active == "awake") {
          // ref.current.scrollTo({ top: 0, behavior: 'smooth' });
          router.push("/awake");
        }
      }}
    >
      <div
        className={styles.bg}
        style={{ opacity: opacity, transition: "2500ms ease-out opacity" }}
      />
      <img
        src={background}
        className={"paralaxItem"}
        data-speed="1"
        alt="background"
        style={{ zIndex: 0 }}
      />

      <img
        src={sleep}
        className={classNames(
          "paralaxItem",
          "tr",
          active == "awake" ? "shade" : "visible"
        )}
        data-speed="3"
        alt="sleep"
        style={{ zIndex: 1 }}
      />
      <img
        src={awake}
        className={classNames(
          "paralaxItem",
          "tr",
          active == "sleep" ? "shade" : "visible"
        )}
        data-speed="3"
        alt="awake"
        style={{ zIndex: 2 }}
      />
      <img
        src={light1}
        className={classNames(
          "paralaxItem",
          "tr",
          active !== "" ? "visible" : "hidden"
        )}
        data-speed="3"
        alt="light1"
        style={{ zIndex: active == "sleep" ? 10 : 1 }}
      />
      <img
        src={light3}
        className={classNames(
          "paralaxItem",
          "tr",
          active == "awake" ? "visible" : "hidden"
        )}
        data-speed="3"
        alt="light3"
        style={{ zIndex: 5 }}
      />
      <img
        src={light2}
        className={classNames(
          "paralaxItem",
          "tr",
          active == "sleep" ? "visible" : "hidden"
        )}
        data-speed="3"
        alt="light2"
        style={{ zIndex: 4 }}
      />

      {/* <img src={wheels} className={cn('paralaxItem', styles.awake__pulse_6)} data-speed='3' alt="wheels" /> */}
      <img src={noise} alt="noise" style={{ zIndex: 6 }} />
      {/* <div className={cn('paralaxItem', styles.awake__droid)} data-speed='3' >
				<div className={styles.awake__animateDroid}>
					<img src={droid} alt="droid" />
				</div>
			</div> */}

      <ChoseFooter active={active} />
    </div>
  );
};

export default ChoseArt;
