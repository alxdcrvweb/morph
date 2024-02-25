import { FC, RefObject, useEffect, useState } from "react";
// styles
import styles from "../../styles/firstStep.module.scss";
import { getRandomIntInclusive } from "../../utils/utilities";

const Timer = () => {
  const [firstDigi, setFirstDigi] = useState<number | null>(null);
  const [secondDigi, setSecondDigi] = useState<number | null>(null);
  const [timer, setTimer] = useState<string>("");
  useEffect(() => {
    setFirstDigi(getRandomIntInclusive(0, "MORPHEUS".length - 1));
    setSecondDigi(getRandomIntInclusive(0, "MORPHEUS".length - 1));
    setInterval(() => {
      getTimeRemaining();
    }, 1000);
  }, []);

  function getTimeRemaining() {
    const total =
      Date.parse("2024-02-27 19:00:00 GMT+0100") -
      Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)));

    setTimer(
      `${
        hours < 10 ? "0" + hours : hours
      }:${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`
    );
  }
  console.log(timer);
  return <div className={styles.firstStep__timer}>{timer}</div>;
};

export default Timer;
