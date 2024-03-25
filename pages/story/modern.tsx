import { observer } from "mobx-react";
import { NextPage } from "next";
import cn from "classnames";
import styles from "../../styles/firstStoryPage.module.scss";
import storyStyles from "../../styles/story.module.scss";
import { IMAGES } from "../../components/images";
import { useRouter } from "next/router";
import { useState } from "react";
import classNames from "classnames";
import ShowImage from "../../components/Story/ShowImage";

const { ayyon, bottom, logo, life, people } = IMAGES.modern;
const { opensea } = IMAGES.agreement;
const Modern: NextPage = observer(() => {
  const router = useRouter();
  const [prev, setPrev] = useState("");
  const handleClick = () => {
    router.push("/story");
  };
  const slide = (dir: string) => {
    router.push("/story/" + dir);
  };
  return (
    <div className={styles.firstStoryPage}>
      <div className={cn(styles.firstStoryPage__container, "_container")}>
        <div className={styles.firstStoryPage__box}>
          <div className={styles.showdown}>
            <h1 className={cn(styles.showdown__title, "_subtitle")}>
              <span>03</span>
              <img src="/icons/storyDecor.svg" alt="" />
              Modern Ayyon
            </h1>

            <div
              className={cn(
                styles.showdown__littleText,
                "_littleText",
                styles.showdown__center
              )}
            >
              100 years after agreement
            </div>

            <div className={styles.showdown__image}>
              <div className={styles.gatherer__image}>
                <img src={ayyon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.gatherer}>
            <div className={styles.gatherer__grid2}>
              <div className={styles.gatherer__image}>
                <a
                  style={{ cursor: "pointer" }}
                  href="https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/106"
                  target="_blank"
                >
                  <img
                    className={styles.gatherer__image_modern}
                    src={life}
                    alt=""
                  />
                </a>
                <img
                  className={styles.gatherer__image_opeansea}
                  src={opensea}
                  alt=""
                />
                <div>Adam and Eve</div>
              </div>
              <div className={styles.gatherer__content}>
                <h1 className={cn(styles.gatherer__title, "_subtitle")}>
                  Life in Ayyon
                </h1>
                <div className={styles.gatherer__box}>
                  <p className={"_littleText2"}>
                    It seems that advances in science and occult knowledge have
                    significantly increased the longevity of the Ayyonians. This
                    is a significant plus, given the unfriendly environment and
                    the difficulty in raising children.The rhythm of life had
                    settled down if you could say that about a post-apocalyptic
                    world.
                    <div>.</div> The Sleepers were moving through the Steps and
                    getting on with life. The Vigilants led progress - restoring
                    flora and fauna in the Domes and dealing with implants.
                    Despite the Agreement, implants turned out to be incredibly
                    handy - there was at least some benefit from the clashes of
                    the past.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gatherer}>
            <div className={styles.ride__grid}>
              <div className={styles.third__content}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "50px",
                  }}
                >
                  <img src={logo} alt="" />
                </div>
                <div className={styles.third__box}>
                  <p className={"_littleText2"}>
                    The common people - namely the Sleepers who hadn't advanced
                    high up the Steps and the Vigilants who hadn't delved into
                    the infrastructure of governance - maintained good
                    neighborly relations among themselves. Until knowledge
                    divorced them from each other. The houses around the Tower
                    of Agreement were largely populated by such residents.{" "}
                    <div>.</div> <div>.</div> Most of the knowledgeable ones on
                    both sides were too enthralled with achieving their
                    faction's goals - but not all of them.{" "}
                    <ShowImage
                      setPrev={setPrev}
                      prev={prev}
                      name={"Mandala's"}
                      imageUrl="/modern/Mandala.png"
                    />{" "}
                    social media live’s could be watched by both the youth on
                    the Sleeper’s side and the Vigilant’s side. Sometimes you
                    could even see the same{" "}
                    <ShowImage
                      setPrev={setPrev}
                      prev={prev}
                      name={"Mandala"}
                      imageUrl="/modern/Mandala.png"
                    />
                    , along with{" "}
                    <ShowImage
                      setPrev={setPrev}
                      prev={prev}
                      name={"Adam"}
                      imageUrl="/modern/Adam.png"
                    />
                    ,{" "}
                    <ShowImage
                      setPrev={setPrev}
                      prev={prev}
                      name={"Eve"}
                      imageUrl="/modern/Eve.png"
                    />
                    , and{" "}
                    <ShowImage
                      setPrev={setPrev}
                      prev={prev}
                      name={"Rider"}
                      imageUrl="/modern/Rider.png"
                    />
                    , strutting around the neighborhoods of Ayyon in the latest
                    muscle car.
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <a
                  style={{ cursor: "pointer" }}
                  href="https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/459"
                  target="_blank"
                >
                  <img className={styles.ride__image} src={people} alt="" />
                </a>
                {/* <img
                  src={opensea}
                  className={styles.ride__image_opeansea}
                  alt=""
                /> */}
                <div className={styles.ride__image_text}>Rider</div>
              </div>
            </div>
          </div>
          <div className={styles.forth}>
            <img className={styles.forth__img} src={bottom} />
            <div className={styles.forth__box}>
              <p className={"_littleText"}>
                <div className={styles.forth__text}>
                  Despite the Agreement, some of the high-ranking Sleepers were
                  downright dangerous. One could say it wasn't entirely their
                  fault - great knowledge could drive them mad enough that even
                  a whisper from the First wouldn't keep them sane. But that
                  didn't diminish the danger. Many of the Vigilants were using
                  an app from the Innovator: a tracker for where the{" "}
                  <ShowImage
                    setPrev={setPrev}
                    prev={prev}
                    name={"Wendigo"}
                    imageUrl="/modern/Wendigo.png"
                  />{" "}
                  or the{" "}
                  <ShowImage
                    setPrev={setPrev}
                    prev={prev}
                    name={"Gatherer"}
                    imageUrl="/modern/Gatherer.png"
                  />{" "}
                  is now. Nominally there were no witnesses of harm from them.
                  So either there was no harm - or no surviving witnesses, there
                  is no answer to that question yet. Better to use the app.
                </div>
                <br />
                <div style={{ marginTop: "80px" }}>
                  After a week of negotiations, an Agreement was made. The
                  Sleepers did not disrupt the flow of progress, the Vigilants
                  did not intrude on tradition. At the site of their
                  negotiations, they worked together to build a tower, made of
                  new materials, but covered with the symbols of the eyes and
                  fumigated with the smoke of altars. This tower divided the
                  city into two districts - later to be called Slums and Polis.
                </div>
                <br />
                <div style={{ marginTop: "80px", zIndex: 1000 }}>
                  It can be said that the real development of culture began
                  here.
                </div>
              </p>
            </div>
          </div>

          <div>
            <div
              className={cn(
                storyStyles.story__content,
                storyStyles.story__content_padding
              )}
            >
              {/* <div className={storyStyles.story__head}>Next chapter</div> */}
              <div className={storyStyles.story__main}>
                <div
                  className={storyStyles.story__slide}
                  onClick={() => slide("agreement")}
                >
                  <h2
                    className={cn(
                      storyStyles.story__title,
                      storyStyles.story__subtitle
                    )}
                  >
                    <span>02</span>
                    <img src="/icons/storyDecor.svg" alt="" />
                    Agreement
                  </h2>
                  <div className={storyStyles.story__status__subtitle}>
                    Passed
                  </div>
                </div>
                <div className={storyStyles.story__footer}>
                  <h2
                    className={cn(
                      storyStyles.story__title,
                      storyStyles.story__subtitle
                    )}
                  >
                    <span>03</span>
                    <img src="/icons/storyDecor.svg" alt="" />
                    Modern Ayyon
                  </h2>
                  <div className={storyStyles.story__status__subtitle}>
                    Playing
                  </div>
                  <div
                    onClick={handleClick}
                    className={cn(
                      storyStyles.story__explore,
                      storyStyles.story__explore_dark,
                      storyStyles.story__explore_desctop
                    )}
                  >
                    Back to chapters
                  </div>
                  <div className={storyStyles.story__row}>
                    <img
                      src="/arrow.svg"
                      className={storyStyles.story__back}
                      onClick={() => slide("nightmare_fuel")}
                    />
                    <svg
                      width="42"
                      height="10"
                      viewBox="0 0 42 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="8"
                        height="8"
                        rx="4"
                        stroke="white"
                      />
                      <rect
                        x="17"
                        y="1"
                        width="8"
                        height="8"
                        rx="4"
                        fill="white"
                        stroke="white"
                      />
                      <rect
                        x="33"
                        y="1"
                        width="8"
                        height="8"
                        rx="4"
                        stroke="white"
                      />
                    </svg>

                    <img
                      style={{ transform: "rotate(180deg)" }}
                      className={cn(
                        storyStyles.story__back,
                        storyStyles.story__slide__empty
                      )}
                      src="/arrow.svg"
                      onClick={() => slide("2")}
                    />
                  </div>
                </div>
                <div
                  className={classNames(
                    storyStyles.story__slide,
                    storyStyles.story__slide__empty
                  )}
                >
                  <h2
                    className={classNames(
                      storyStyles.story__title,
                      storyStyles.story__subtitle
                    )}
                  >
                    <span>03</span>
                    <img src="/icons/storyDecor.svg" alt="" />
                    Modre
                  </h2>
                  <div className={storyStyles.story__status__subtitle}>
                    Work in progress
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className={cn(
                    storyStyles.story__explore,
                    storyStyles.story__explore_dark,
                    storyStyles.story__explore_mobile
                  )}
                >
                  Back to chapters
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Modern;
