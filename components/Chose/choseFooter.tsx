import classNames from "classnames";
import { IMAGES } from "../images";
import style from "./footer.module.scss";
const ChoseFooter = ({active}:{active:string}) => {
  const { line, arrow, point, center } = IMAGES.chose;
  return (
    <div className={style.footer__container}>
      <div className={style.footer__row}>
        <div className={classNames(style.footer__text, active == 'awake' && style.footer__text__active)}>Awake</div>
        <img src={point} className={classNames(style.footer__point, active == 'awake' && style.footer__point__active)} />
        <img src={line} />
        <img src={arrow} style={{ marginLeft: "30px" }} />
        <img src={center} className={style.footer__center} />
        <img src={arrow} style={{ marginRight: "30px" }}  className={classNames(style.footer__reverse)} />
        <img src={line} className={style.footer__reverse} />
        <img src={point} className={classNames(style.footer__point, active == 'sleep' && style.footer__point__active)}  />
        <div className={classNames(style.footer__text, active == 'sleep' && style.footer__text__active)} >Sleeping</div>
      </div>
    </div>
  );
};
export default ChoseFooter;
