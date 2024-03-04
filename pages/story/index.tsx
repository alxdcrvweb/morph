import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import { NextPage } from "next";
import { useEffect } from "react";
import StoryConnect from "../../components/Story/StoryConnect";
import StorySlider from "../../components/Story/StorySlider";
import styles from "../../styles/story.module.scss";
import { getCsrfToken } from "next-auth/react";
export async function getServerSideProps(context: any) {
  const csrfToken = await getCsrfToken(context);
  return { props: { csrfToken } };
}

const Story: NextPage = observer(() => {
  // useEffect(() => {
  // 	if (!address || !web3) {
  // 		connectWallet()
  // 	}
  // }, [])

  return <section className={styles.story}>{<StorySlider />}</section>;
});

export default Story;
