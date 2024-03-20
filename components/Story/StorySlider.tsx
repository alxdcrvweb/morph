import { observer } from "mobx-react";
import { FC } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "../../styles/story.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
const StoryChoose: FC = observer(() => {
  const router = useRouter();
  const slide = (dir: string) => {
    router.push("/story/" + dir);
  };
  return (
    <div className={styles.story__choose}>
      <div className={styles.story__backstory}>Backstory</div>
      <div
        className={classNames(styles.story__part, styles.story__nightmare)}
        onClick={() => slide("nightmare_fuel")}
      >
        <h2 className={classNames(styles.story__title, styles.story__subtitle)}>
          <span>01</span>
          <img src="/icons/storyDecor.svg" alt="" />
          Nightmare Fuel
        </h2>
        <div>
          City of Ayyon - the only inhabited place left on the planet after the
          Nightmare Fuel also known as Great Conflict.{" "}
        </div>
      </div>
      <div
        className={classNames(styles.story__part, styles.story__agreement)}
        onClick={() => slide("agreement")}
      >
        <h2 className={classNames(styles.story__title, styles.story__subtitle)}>
          <span>02</span>
          <img src="/icons/storyDecor.svg" alt="" />
          Agreement
        </h2>
        <div>
          Years passed and the camps of both factions grew.The followers of the
          First moved deeper into the city, not renovating, but transforming the
          ruins of old Ayyon into the semblance of a living temple.
        </div>
      </div>
      <div
        className={classNames(styles.story__part, styles.story__ayon)}
        onClick={() => slide("3")}
      >
        <h2 className={classNames(styles.story__title, styles.story__subtitle)}>
          <span>03</span>
          <img src="/icons/storyDecor.svg" alt="" />
          Modern Ayyon
        </h2>
        <div>Soon</div>
      </div>
    </div>
  );
});

export default StoryChoose;
