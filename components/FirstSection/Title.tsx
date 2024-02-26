import { FC, RefObject, useEffect, useState } from "react";
// styles
import styles from "../../styles/firstStep.module.scss";
import { getRandomIntInclusive } from "../../utils/utilities";


const StepTitle = () => {
  const [firstDigi, setFirstDigi] = useState<number | null>(null);
  const [secondDigi, setSecondDigi] = useState<number | null>(null);

  useEffect(() => {
    setFirstDigi(1);
    setSecondDigi(4);
  }, []);

  return (
    <div className={styles.firstStep__title}>
      {"MORPHEUS".split("").map((letter, index) => {
        const classList =
          index === firstDigi || index === secondDigi ? "nostra" : "apocLight";
        return (
          <span key={letter} className={classList}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default StepTitle;
