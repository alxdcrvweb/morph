import { observer } from "mobx-react";
import { NextPage } from "next";
import cn from "classnames";
import styles from "../../styles/firstStoryPage.module.scss";
import storyStyles from "../../styles/story.module.scss";
import { IMAGES } from "../../components/images";
import { useRouter } from "next/router";
import { useState } from "react";

const { art, first, fanatic, screen, logo, cube, opensea } = IMAGES.agreement;

const FirstStory: NextPage = observer(() => {
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
              <span>02</span>
              <img src="/icons/storyDecor.svg" alt="" />
              Agreement
            </h1>
            <div className={styles.showdown__grid}>
              <div className={cn(styles.showdown__bigText, "_bigText")}>
                Years passed and the camps of both factions grew. Occupying the
                flooded part first, the followers of the{" "}
                <span
                  onMouseEnter={() => {
                    setPrev("first1");
                  }}
                  onMouseLeave={() => {
                    setPrev("");
                  }}
                >
                  First
                  <img
                    style={{ opacity: prev == "first1" ? 1 : 0 }}
                    src="/agreement/first_prev.png"
                  />
                </span>{" "}
                moved deeper into the city, not renovating, but transforming the
                ruins of old Ayyon into the semblance of a living temple.
              </div>
              <div className={cn(styles.showdown__littleText, "_littleText")}>
                Their goal was to get as many residents as possible to begin
                taking the Steps.
              </div>
            </div>
            <div className={styles.showdown__image}>
              <img src={art} alt="" />
            </div>
          </div>
          <div className={styles.gatherer}>
            <div className={styles.gatherer__grid2}>
              <div className={styles.gatherer__image}>
                <a
                  style={{ cursor: "pointer" }}
                  href="https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/440"
                  target="_blank"
                >
                  <img
                    className={styles.gatherer__image_in}
                    src={first}
                    alt=""
                  />
                </a>
                <img
                  className={styles.gatherer__image_opeansea}
                  src={opensea}
                  alt=""
                />
                <div>First</div>
              </div>
              <div className={styles.gatherer__content}>
                <h1 className={cn(styles.gatherer__title, "_subtitle")}>
                  First Clashes
                </h1>
                <div className={styles.gatherer__box}>
                  <p className={"_littleText2"}>
                    The{" "}
                    <span
                      onMouseEnter={() => {
                        setPrev("first2");
                      }}
                      onMouseLeave={() => {
                        setPrev("");
                      }}
                    >
                      First{" "}
                      <img
                        style={{ opacity: prev == "first2" ? 1 : 0 }}
                        src="/agreement/first_prev.png"
                      />
                    </span>{" "}
                    was assisted in organizing the learning process by the very
                    first responders to his whispers - they would eventually be
                    given the names{" "}
                    <span
                      onMouseEnter={() => {
                        setPrev("law");
                      }}
                      onMouseLeave={() => {
                        setPrev("");
                      }}
                    >
                      Law{" "}
                      <img
                        style={{ opacity: prev == "law" ? 1 : 0 }}
                        src="/agreement/law.png"
                      />
                    </span>{" "}
                    and{" "}
                    <span
                      onMouseEnter={() => {
                        setPrev("fanatic");
                      }}
                      onMouseLeave={() => {
                        setPrev("");
                      }}
                    >
                      Fanatic{" "}
                      <img
                        style={{ opacity: prev == "fanatic" ? 1 : 0 }}
                        src="/agreement/fanatic_prev.png"
                      />
                    </span>
                    .<div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div> This continued until they encountered the first
                    dome in their path. This object was so alien to them, with
                    its incessant burning cold light and palpable craving for
                    life, that they destroyed it without waiting for orders. The
                    owners of the dome, the survivors, were nearby. But the
                    closer they got to the dome - the more they wanted to sleep.
                    In the ruins of their creation, they fell into a restless
                    sleep full of nightmares.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gatherer}>
            <div className={styles.third__grid}>
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
                  <p className={"_littleText"}>
                    After that, the clashes became more frequent. The survivors
                    first developed medications to keep them awake and keep
                    their minds clear so they wouldn't hallucinate, and then
                    they developed mechanical implants that increased their
                    resilience tenfold. It was because of the methods of these
                    two groups that the names we know now - the Sleepers and the
                    Vigilants - stuck to them. The more there were clashes, the
                    more the people of Ayyon realized that they were starting to
                    roll back everything they had built with their hard work. By
                    destroying each other's craft, they were making things worse
                    for humanity. Despite the great difference in their views
                    and approaches to the future - they began peace talks.
                  </p>
                </div>
              </div>
              <div className={styles.third__image}>
                <a
                  style={{ cursor: "pointer" }}
                  href="https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/459"
                  target="_blank"
                >
                  <img
                    className={styles.gatherer__image_in}
                    src={fanatic}
                    alt=""
                  />
                </a>
                <img
                  src={opensea}
                  className={styles.gatherer__image_opeansea}
                  alt=""
                />
                <div>Fanatic</div>
              </div>
            </div>
          </div>
          <div className={styles.forth}>
            <img src={cube} />
            <div className={styles.forth__box}>
              <p className={"_littleText"}>
                <div style={{ marginTop: "60px" }}>
                  <span
                    onMouseEnter={() => {
                      setPrev("order");
                    }}
                    onMouseLeave={() => {
                      setPrev("");
                    }}
                  >
                    Order{" "}
                    <img
                      style={{ opacity: prev == "order" ? 1 : 0 }}
                      src="/agreement/order.png"
                    />
                  </span>
                  , under the protection of{" "}
                  <span
                    onMouseEnter={() => {
                      setPrev("spider");
                    }}
                    onMouseLeave={() => {
                      setPrev("");
                    }}
                  >
                    Spider
                    <img
                      style={{ opacity: prev == "spider" ? 1 : 0 }}
                      src="/agreement/spider.png"
                    />
                  </span>{" "}
                  - a pioneer of body modifications - came to the center of the
                  city day after day to talk to the First. To talk physically,
                  not through mental whispers. It was the only time the First's
                  voice could be heard with your own ears.
                </div>{" "}
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
            <img src={screen} className={storyStyles.story__full} />
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
                  onClick={() => slide("nightmare_fuel")}
                >
                  <h2
                    className={cn(
                      storyStyles.story__title,
                      storyStyles.story__subtitle
                    )}
                  >
                    <span>01</span>
                    <img src="/icons/storyDecor.svg" alt="" />
                    Nightmare Fuel
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
                    <span>02</span>
                    <img src="/icons/storyDecor.svg" alt="" />
                    Agreement
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
                      onClick={() => slide("3")}
                    />
                  </div>
                </div>
                <div className={storyStyles.story__slide}>
                  <h2
                    className={cn(
                      storyStyles.story__title,
                      storyStyles.story__subtitle
                    )}
                  >
                    <span>03</span>
                    <img src="/icons/storyDecor.svg" alt="" />
                    Coming soon
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

export default FirstStory;
