import * as React from "react";
import { IMAGES } from "../images";
import VoteRow from "./voteRow";

function VoteList() {
  return (
    <>
      <div className="main2">
        <img
          className="mint__second__layer"
          src={IMAGES.mint.mintSecondLayer}
        />
        <div className="container">
          <div className="content-wrapper">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b92fc54dcee73809d6527293e3502b004e8bf38f5932d7a9b717fb4800f86c5?"
              className="main-image"
            />
            <div className="question">Voting inteface</div>
          </div>
        </div>
        <div className="vote-rows">
          <VoteRow />
        </div>
      </div>
      <style jsx>{`
        .main2 {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 100px;
          width: 100vw;
          height: 100vh;
          background-size: cover;
          background-position: center;
          background-image: url(${IMAGES.mint.mintbg});
        }
        .mint__second__layer {
          position: absolute;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          top: 0;
          z-index: -1;
          opacity: 0.6;
        }
        .vote-rows {
            margin-top: 66px;
            max-width: 574px;
            width: 100%;
        }
        .container {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          color: #fff;
          font-weight: 400;
          max-width: 1071px;
          letter-spacing: 0.86px;
          width: 100%;
        }
        .content-wrapper {
          align-self: center;
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
        }
        @media (max-width: 991px) {
          .content-wrapper {
            max-width: 100%;
          }
        }
        .main-image {
          aspect-ratio: 0.98;
          object-fit: auto;
          object-position: center;
          width: 40px;
        }
        .end-date {
          text-align: center;
          font-family: "ApocLC";
          margin-top: 27px;
        }
        .question {
          color: #fafafa;
          letter-spacing: 3.82px;
          align-self: stretch;
          text-align: center;
          margin-top: 30px;
          font-size: 63.6px;
          font-style: italic;
          font-weight: 800;
        }
        @media (max-width: 991px) {
          .question {
            max-width: 100%;
            font-size: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default VoteList;
