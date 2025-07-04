import { FC, RefObject, useEffect, useState } from "react";
// styles
import styles from "../../styles/firstStep.module.scss";
import { getRandomIntInclusive } from "../../utils/utilities";


const SmallTitle = () => {
  const [firstDigi, setFirstDigi] = useState<number | null>(null);
  const [secondDigi, setSecondDigi] = useState<number | null>(null);

  useEffect(() => {
    setFirstDigi(getRandomIntInclusive(0, "MORPHEUS".length - 1));
    setSecondDigi(getRandomIntInclusive(0, "MORPHEUS".length - 1));
  }, []);

  return (
    <div className={styles.small__title}>
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

export default SmallTitle;
