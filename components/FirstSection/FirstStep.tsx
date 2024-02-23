import { FC, RefObject, useEffect, useState } from "react";
// styles
import styles from "../../styles/firstStep.module.scss";
import { getRandomIntInclusive } from "../../utils/utilities";
import StepTitle from "./Title";

interface FirstStepProps {
  mainTitleRef: RefObject<HTMLDivElement>;
}

const FirstStep: FC<FirstStepProps> = ({ mainTitleRef }) => {
  return (
    <div className={`${styles.firstStep}`} ref={mainTitleRef}>
      <div className={styles.firstStep__body}>
        <StepTitle />
        <div className={styles.firstStep__subtitle}>Сhoose your side</div>
      </div>
    </div>
  );
};

export default FirstStep;
