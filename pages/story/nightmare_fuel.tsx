import { observer } from "mobx-react";
import { NextPage } from "next";
import cn from "classnames";
import styles from "../../styles/firstStoryPage.module.scss";
import storyStyles from "../../styles/story.module.scss";
import { IMAGES } from "../../components/images";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import decor1 from "../../public/showdown/decor1.svg";
import decor2 from "../../public/showdown/decor2.svg";
import Image from "next/image";
import classNames from "classnames";
// import { getCsrfToken } from 'next-auth/react';
// export async function getServerSideProps(context:any) {
// 	const csrfToken = await getCsrfToken(context);
// 	return { props: { csrfToken } };
//   }

const { art, gatherer, third, stone } = IMAGES.showdown;

const Nightmare: NextPage = observer(() => {
  const slide = (dir: string) => {
    router.push("/story/" + dir);
  };
  const router = useRouter();

  const handleClick = () => {
    router.push("/story");
  };

  // if (isMobile) router.push('/sleeping')

  return (
    <div className={styles.firstStoryPage}>
      <div className={cn(styles.firstStoryPage__container, "_container")}>
        <div className={styles.firstStoryPage__box}>
          <div className={styles.showdown}>
            <h1 className={cn(styles.showdown__title, "_subtitle")}>
              <span>01</span>
              <img src="/icons/storyDecor.svg" alt="" />
              Nightmare Fuel
            </h1>
            <div className={styles.showdown__grid}>
              <div className={cn(styles.showdown__bigText, "_bigText")}>
                City of Ayyon - the only inhabitated place left on the planet
                after the Nightmare Fuel also known as Great Conflict.{" "}
              </div>
              <div className={cn(styles.showdown__littleText, "_littleText")}>
                As a reminder of the conflict, in the very <br /> middle of the
                city you can see lonely <br /> skyscraping Agreement Tower,
                which <br /> divide Ayyon into two districts: Slum <br /> and
                Polis.
              </div>
            </div>
            <div className={styles.showdown__image}>
              <img src={art} alt="" />
            </div>
          </div>
          <div className={styles.gatherer}>
            <div className={styles.gatherer__grid}>
              <div className={styles.gatherer__image}>
                <img
                  src={gatherer}
                  className={styles.gatherer__image_in}
                  alt=""
                />
              </div>
              <div className={styles.gatherer__content}>
                <h1 className={cn(styles.gatherer__title, "_subtitle")}>
                  Chapter 1
                </h1>
                <div className={styles.gatherer__box}>
                  <p className={"_littleText"}>
                    The Sleepers date modern Ayyon from the awakening of the
                    <span>First</span>. The Vigilants timeline, on the other
                    hand, begins two weeks earlier. The day of what is now known
                    as Nightmare Fuel.
                  </p>
                  <p className={"_littleText"}>
                    It began when the people of Ayyon found it harder to wake up
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div className={styles.gatherer__text}>
                      *bzzzzzt - snooze - bzzzzt - snooze.*{" "}
                    </div>{" "}
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div> Being late for work or school became something
                    normal. The advanced society of Ayyon was able to reorganize
                    processes and continue to exist with this loss. More and
                    more often you could see sleeping animals or birds in the
                    streets, people in the subway fell asleep and could sleep
                    until closing time.
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
                  <svg
                    width="45"
                    height="46"
                    viewBox="0 0 45 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.82881 37.7924C4.67744 36.6957 3.81318 35.3822 3.00459 34.0306C1.51924 31.5482 0.597361 28.8568 0.217478 26.0004C0.0368144 24.641 -0.0432628 23.2474 0.0231435 21.8783C0.195995 18.3304 0.987986 14.9213 2.71064 11.7797C3.55342 10.2435 4.47431 8.75329 5.74775 7.51891C5.78486 7.48473 5.82197 7.45055 5.8581 7.41637L5.85517 7.4193C5.88838 7.3861 5.92158 7.35192 5.95478 7.31872L5.95283 7.32067C5.98603 7.28747 6.01924 7.25426 6.05244 7.22106L6.05049 7.22301C6.08369 7.15758 6.11689 7.09118 6.15107 7.02575L6.14912 7.02965C6.18232 6.99645 6.2165 6.96227 6.24971 6.92907L6.24678 6.932C6.27998 6.89879 6.31416 6.86461 6.34736 6.83141L6.34443 6.83434C6.37764 6.80114 6.41182 6.76696 6.44502 6.73376L6.44209 6.73668C6.47627 6.70348 6.50947 6.6693 6.54365 6.6361L6.53975 6.64001C6.57393 6.60583 6.60713 6.57262 6.64131 6.53844L6.6374 6.54235C6.67158 6.50817 6.70478 6.47497 6.73896 6.44079L6.73506 6.44469C6.76924 6.41051 6.80244 6.37731 6.83662 6.34313L6.83272 6.34704C6.86689 6.31286 6.9001 6.27965 6.93428 6.24547L6.93037 6.24938C6.96455 6.21032 6.99775 6.17125 7.03193 6.13219C7.0583 6.10582 7.08467 6.07946 7.11103 6.05309C7.18232 6.01989 7.25264 5.98571 7.32393 5.95251L7.32197 5.95446C7.35517 5.92125 7.38935 5.88805 7.42256 5.85387L7.41865 5.85778C7.45283 5.82165 7.48701 5.78551 7.52119 5.7484C8.56709 4.93688 9.56904 4.05797 10.6687 3.3275C12.6032 2.04332 14.7438 1.17223 17.0017 0.648794C18.1911 0.373404 19.4187 0.245473 20.6354 0.104848C21.3894 0.0179342 22.1569 -0.0162455 22.9157 0.00719205C25.6911 0.0901999 28.3698 0.637076 30.9294 1.73864C33.3845 2.79528 35.5856 4.23278 37.5202 6.07458C39.5495 8.00622 41.196 10.2181 42.3747 12.7689C43.2907 14.7513 43.8923 16.8226 44.2575 18.9769C44.5632 20.7816 44.611 22.597 44.5095 24.4056C44.3747 26.8246 43.8308 29.1732 42.8835 31.4154C41.9665 33.5834 40.7399 35.5531 39.195 37.3373C37.0583 39.805 34.531 41.7513 31.5827 43.1312C29.6101 44.055 27.5407 44.7015 25.3591 44.9252C24.364 45.0277 23.364 45.2054 22.3708 45.181C20.3679 45.1332 18.3747 44.9466 16.4294 44.3978C13.4694 43.5629 10.7878 42.1966 8.39229 40.2718C8.01533 39.9681 7.67939 39.6127 7.3249 39.2806C7.2917 39.2396 7.25752 39.1986 7.22431 39.1586L7.22724 39.1615C7.19404 39.1283 7.16084 39.0951 7.12666 39.0619L7.12959 39.0648C7.06318 39.0316 6.99775 38.9974 6.93135 38.9642L6.93428 38.9672C6.86787 38.9007 6.80146 38.8353 6.73603 38.7689L6.73994 38.7718C6.70576 38.7377 6.67256 38.7045 6.63838 38.6703L6.64228 38.6742C6.6081 38.64 6.5749 38.6068 6.54072 38.5726L6.54463 38.5765C6.51045 38.5423 6.47724 38.5091 6.44306 38.475L6.44697 38.4789C6.41279 38.4447 6.37959 38.4115 6.34541 38.3773L6.34932 38.3812C6.31514 38.347 6.28193 38.3138 6.24775 38.2797L6.25166 38.2836C6.21748 38.2494 6.18428 38.2162 6.1501 38.182L6.15303 38.1859C6.11982 38.1195 6.08564 38.0541 6.05244 37.9877L6.05439 37.9896C6.02119 37.9564 5.98799 37.9232 5.95478 37.89L5.95771 37.892C5.91572 37.8588 5.87373 37.8256 5.83174 37.7924H5.82881ZM7.21064 11.2142C6.85225 11.7064 6.49385 12.1986 6.13545 12.6918C1.23799 19.9818 0.88447 28.7416 6.10127 35.8177C11.445 43.0658 20.4626 45.9173 28.7644 43.0589C36.7858 40.2972 42.4226 32.3441 42.239 24.0658C42.1354 19.4105 40.4304 15.3392 37.7419 11.6214C37.6511 11.4955 37.5153 11.4027 37.4001 11.2953C39.6608 15.5238 40.9118 26.3627 39.3112 28.3929C39.6599 23.8197 38.3621 19.4711 36.0251 15.8216C36.8621 18.4711 37.5563 21.055 37.6315 23.8099C37.7077 26.5912 37.404 29.3099 36.2604 31.8851C36.2302 31.805 36.2282 31.7289 36.2302 31.6517C36.2634 30.3402 36.4343 29.015 36.3024 27.7201C35.9899 24.6341 34.6569 21.9779 32.5417 19.7132C32.5065 19.6761 32.4714 19.639 32.4372 19.6019L32.4421 19.6058C31.5231 18.808 30.6042 18.0082 29.6813 17.2152C29.6384 17.1781 29.5661 17.1341 29.4978 17.1273C29.4782 17.1273 29.4577 17.1273 29.4382 17.1283C29.4558 17.1468 29.4733 17.1664 29.4899 17.1849C29.8386 17.5961 30.1862 18.0072 30.5349 18.4193C30.5749 18.472 30.6149 18.5248 30.656 18.5775C30.7546 18.7015 30.8542 18.8246 30.9528 18.9486C31.4138 19.5961 31.9431 20.2064 32.3229 20.8978C34.7976 25.3998 34.6872 29.8861 32.0388 34.2631C29.2321 38.9007 23.9353 41.4242 18.8737 40.64C12.4401 39.6439 8.11592 33.7113 9.21064 27.2797C9.97529 22.7865 12.5427 19.6263 16.6462 17.6957C17.0456 17.5082 17.4821 17.3998 17.9509 17.2377C17.9167 17.3324 17.9147 17.3509 17.905 17.3617C17.819 17.4593 17.7312 17.5541 17.6452 17.6517C16.3122 19.1664 15.8122 20.9437 16.1755 22.9037C16.6911 25.68 19.0183 27.8002 21.656 28.0209C24.5642 28.264 27.1579 26.6361 28.237 23.9183C29.0915 21.767 29.1599 19.5306 28.8366 17.2972C28.4909 14.9066 27.9987 12.5365 27.5231 10.1673C27.2829 8.96911 26.9372 7.79137 26.6394 6.60387C26.5739 6.87048 26.57 7.12243 26.5739 7.37536C26.6003 9.13122 26.695 10.889 26.6335 12.641C26.5886 13.934 26.3396 15.2191 26.1813 16.5082C26.0456 16.2318 25.8757 15.9652 25.7849 15.6742C25.6911 15.3754 25.6755 15.0531 25.6247 14.7406C25.3796 10.7836 24.3132 7.03747 22.7507 3.41735C22.8767 5.04528 23.0046 6.65856 22.8796 8.27575C22.6237 7.70055 22.446 7.11364 22.2087 6.55211C21.6296 5.17907 20.612 4.16344 19.4558 3.26989C19.4265 3.2777 19.3981 3.28551 19.3688 3.29332C19.3728 3.30407 19.3757 3.31481 19.3796 3.32555C19.405 3.30309 19.4313 3.28063 19.4567 3.25817C19.4841 3.38512 19.4919 3.52086 19.5427 3.63805C20.0739 4.8695 20.7282 6.06286 21.1247 7.3363C21.9372 9.94469 21.8474 12.5248 20.4792 14.9789C20.2399 15.4076 19.9431 15.6332 19.447 15.7259C12.2692 17.0599 7.27412 23.7367 8.17939 30.7777C8.20967 31.0091 8.20967 31.2455 8.22334 31.4789C8.17451 31.4886 8.12666 31.4994 8.07783 31.5091C7.85713 30.7591 7.59834 30.0179 7.42353 29.2572C6.78096 26.4662 6.77607 23.6459 7.14521 20.8207C7.25361 19.9935 7.46064 19.18 7.62275 18.3597C7.94111 17.4574 8.25947 16.555 8.57783 15.6517L8.45869 15.5882C8.10713 16.2474 7.75459 16.9076 7.40303 17.5668C7.36787 17.6195 7.3249 17.6693 7.29756 17.7259C6.20381 20.0277 5.47139 22.434 5.27803 24.9828C5.19795 26.0316 5.18623 27.0843 5.14326 28.1361C4.4831 25.2767 4.53682 22.4017 4.92744 19.5228C5.22529 17.3285 5.72236 15.1791 6.44404 13.0834C6.47236 13.0179 6.50068 12.9515 6.529 12.8861C6.54951 12.8656 6.55635 12.8412 6.54951 12.8129C6.79658 12.3011 7.04365 11.7884 7.28975 11.2767C7.29365 11.2367 7.29756 11.1976 7.30146 11.1576C7.27021 11.1761 7.23896 11.1947 7.20771 11.2132L7.21064 11.2142ZM30.1062 14.9457C30.2438 14.5033 30.3796 14.0922 30.5017 13.6761C30.6765 13.0765 30.4968 12.6058 30.0954 12.391C30.0378 12.7806 30.0104 13.2103 29.905 13.6195C29.781 14.099 29.7458 14.5365 30.1062 14.9457Z"
                      fill="#F4E9CF"
                    />
                    <path
                      d="M26.1823 16.5072C25.904 17.6781 25.6267 18.848 25.3483 20.0189L25.1579 19.9838C25.5495 18.2543 25.6686 16.5033 25.6267 14.7406C25.6765 15.0531 25.6931 15.3754 25.7868 15.6742C25.8776 15.9652 26.0476 16.2308 26.1833 16.5082L26.1823 16.5072Z"
                      fill="#F4E9CF"
                    />
                    <path
                      d="M22.0189 18.1899C22.2435 18.6001 22.4398 18.939 22.6166 19.2876C22.9154 19.8774 23.2826 20.4487 23.475 21.0728C23.7406 21.939 23.1537 22.8013 22.3764 22.8511C21.4721 22.9087 20.7963 22.0952 21.0453 21.2192C21.1234 20.9429 21.2601 20.6733 21.4154 20.4302C21.7387 19.9272 22.1039 19.4614 21.8881 18.7896C21.8334 18.6177 21.9721 18.3823 22.0189 18.1899Z"
                      fill="#F4E9CF"
                    />
                  </svg>
                </div>
                <div className={styles.third__box}>
                  <p className={"_littleText"}>
                    Time staggered from side to side. It was hard to tell
                    whether it was yesterday or tomorrow. City lunatics walked
                    the streets with placards saying that there was no tomorrow,
                    that we were in eternal liminal space, in the very minutes
                    that in a leap year accumulate into an extra day.{" "}
                    <div>.</div> <div>.</div> Old people, it seems, stopped
                    waking up altogether. They stayed alive - their pulse simply
                    slowed, but they didn't wake up. Leaden heaviness became a
                    natural state for the world. <div>.</div> <div>.</div> And
                    so, on the day from which the Vigilants counted down the
                    years of modern life - everything fell asleep. People,
                    birds, animals - the earth itself fell asleep. Everyone fell
                    into a clinging nightmare, a dream from which you can't get
                    out because you just can't take that one step - everything
                    is too heavy.
                  </p>
                </div>
              </div>
              <div className={styles.third__image}>
                <img src={third} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.forth}>
            <img src={stone} />
            <div className={styles.forth__box}>
              <p className={"_littleText"}>
                During those two weeks, terrible things happened. Centuries-old
                sleeping trees fell on mountains of sleeping birds and crushed
                them without a single cry. People who were caught sleeping on
                asphalt roads were silently bleeding from their shattered heads
                until the sleep became eternal. Chunks of earth were breaking
                off and the planet was cracking because the very forces of
                nature were in this nightmare.
              </p>
            </div>
          </div>
          <div className={styles.fifth}>
            <div className={styles.fifth__box}>
              <p className={"_littleText"}>
                It lasted exactly 300 hours. 300 hours of nightmare. 300 hours
                that wiped out most of the planet's population, almost all the
                flora and fauna, and set back humanity in development for
                centuries. 299 hours for the <span>First</span>, who came out of
                sleep and saw what became the fuel for these nightmares.{" "}
                <div className={styles.fifth__box__text}>
                  In the beginning there was a word and that word was - wake up.
                </div>
                <div className={styles.fifth__box__wake}>Wake up!</div>
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
                  className={classNames(
                    storyStyles.story__slide,
                    storyStyles.story__slide__empty
                  )}
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
                    <span>01</span>
                    <img src="/icons/storyDecor.svg" alt="" />
                    Nightmare Fuel
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
                      className={cn(
                        storyStyles.story__back,
                        storyStyles.story__slide__empty
                      )}
                      onClick={() => slide("1")}
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
                      className={storyStyles.story__back}
                      src="/arrow.svg"
                      onClick={() => slide("agreement")}
                    />
                  </div>
                </div>
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
                    Next
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

export default Nightmare;
