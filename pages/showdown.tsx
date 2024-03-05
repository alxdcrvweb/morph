import { FC, useEffect, useRef } from "react";
import ChoseSection from "../components/Chose/chose";
import ChoseArt from "../components/Chose/ChoseArt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { getCsrfToken } from "next-auth/react";
gsap.registerPlugin(ScrollTrigger);
// export async function getServerSideProps(context:any) {
//   const csrfToken = await getCsrfToken(context);
//   return { props: { csrfToken: csrfToken || "" } };
// }
const Main: FC = (props) => {
  const wrapper = useRef<HTMLDivElement>(null);
  console.log(props);
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
