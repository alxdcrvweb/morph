import React from "react";
import stlye from "../styles/leaderboard.module.scss";
const Leaderboard: React.FC = () => {
  return (
    <div className={stlye.leaderboard}>
      <img src="/leaderboard/showdown.svg" />
      <div className={stlye.leaderboard__title}>The Showdown</div>
      <div className={stlye.leaderboard__text}>
        The Chapter 2 coming soon to the Morpheus world. But who will be the
        leader?{" "}
      </div>
    </div>
  );
};

export default Leaderboard;
