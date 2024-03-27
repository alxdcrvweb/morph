import React from "react";
import stlye from "../styles/leaderboard.module.scss";
import { observer } from "mobx-react";
import { SignInButton } from "@farcaster/auth-kit";
import { Web3Store } from "../stores/Web3Store";
import { useInjection } from "inversify-react";
import ConnectButtonCustom from "../components/Header/connectButtonCustom";
const Leaderboard: React.FC = observer(() => {
  const web3store = useInjection(Web3Store);
  return (
    <div className={stlye.leaderboard}>
      <div className={stlye.leaderboard__connect}>Connect to your account</div>
      <ConnectButtonCustom />

      <div className={stlye.leaderboard__or}>or</div>
      <button className={stlye.leaderboard__button}>
        Log in with Farcaster
      </button>
      <SignInButton
        onSuccess={(profile) => {
          console.log(profile, "profile");
          web3store.setFarcasterUser(profile);
        }}
      />
    </div>
  );
});

export default Leaderboard;
