import { useRef } from "react";
import style from "./mint.module.scss";
import StepTitle from "../FirstSection/Title";

const Waiting = () => {
  return (
    <div className={style.mint__main}>
      <div className={style.mint__top}>
        <div className={style.mint__date}>27.02.2024</div>
        <StepTitle />
      </div>
      <div className={style.mint__text}>
        Hand drawn, Farcaster native collection focused on world building and
        immersive experience
      </div>
    </div>
  );
};
export default Waiting;
