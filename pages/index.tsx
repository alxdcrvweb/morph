import { FC, useEffect, useRef } from "react";
import ChoseSection from "../components/Chose/chose";
import ChoseArt from "../components/Chose/ChoseArt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Main: FC = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      wrapper.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.5,
        duration: 2,
      }
    );
  }, []);
  return (
    <div ref={wrapper}>
      <ChoseSection FirstArt={ChoseArt} />
    </div>
  );
};
export default Main;
