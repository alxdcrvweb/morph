import * as React from "react";
import { IMAGES } from "../images";

function Vote() {
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
            <div className="end-date">End: 06/06/24</div>
            <div className="question">Should we enable OS rarity?</div>
            <div className="vote-summary">
              <div className="vote-status">
                <img src="../green.svg" />
                ongoing /
              </div>
              <div className="vote-details">
                Total votes: 127 / 98 YES (77%) / 29 NO (23%)
              </div>
            </div>
          </div>
          <div className="teams-wrapper">
            <div className="team-yes">
              <div className="team-header">Team YES</div>
              <div className="morphs-wrapper">
                <div className="morph-item">
                  <div className="morph-details">
                    <div className="morph-info">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="morph-image"
                      />
                      <div className="morph-name">Morph #3</div>
                    </div>
                    <div className="morph-date">03/06</div>
                  </div>
                </div>
                <div className="morph-item">
                  <div className="morph-details">
                    <div className="morph-info">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="morph-image"
                      />
                      <div className="morph-name">Morph #34</div>
                    </div>
                    <div className="morph-date">03/06</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fed71dd906ed8704bc9edef3bb8c6ceb20c91f8925117dcc03e94c00f1f945b9?"
              className="divider"
            />
            <div className="team-no">
              <div className="team-header">Team NO</div>
              <div className="morphs-wrapper">
                <div className="morph-item">
                  <div className="morph-details">
                    <div className="morph-info">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="morph-image"
                      />
                      <div className="morph-name">Morph #135</div>
                    </div>
                    <div className="morph-date">03/06</div>
                  </div>
                </div>
                <div className="morph-item">
                  <div className="morph-details">
                    <div className="morph-info">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="morph-image"
                      />
                      <div className="morph-name">Morph #581</div>
                    </div>
                    <div className="morph-date">03/06</div>
                  </div>
                </div>
              </div>
              <div className="morph-item">
                <div className="morph-details">
                  <div className="morph-info">
                    <img loading="lazy" srcSet="..." className="morph-image" />
                    <div className="morph-name">Morph #581</div>
                  </div>
                  <div className="morph-date">03/06</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .main2 {
          display: flex;
          justify-content: center;
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
        .vote-summary {
          border-radius: 30px;
          background-color: #212121;
          display: flex;
          margin-top: 22px;
          gap: 7px;
          padding: 10px 26px;
        }
        @media (max-width: 991px) {
          .vote-summary {
            flex-wrap: wrap;
            padding: 0 20px;
            height: 30px;
          }
        }
        .vote-status {
          text-align: center;
          display: flex;
          align-items: center;
          font-family: "ApocLC", sans-serif;
        }
        .vote-status img {
          margin-right: 10px;
        }
        .vote-details {
          font-family: "ApocLC", sans-serif;
          flex-grow: 1;
          display: flex;
          align-items: center;
          flex-basis: auto;
        }
        .teams-wrapper {
          display: flex;
          margin-top: 31px;
          width: 100%;
          align-items: start;
          gap: 20px;
          justify-content: space-between;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .teams-wrapper {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .team-yes {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .team-yes {
            max-width: 100%;
          }
        }
        .team-header {
          text-align: center;
          font-family: "ApocLC", sans-serif;
          align-self: center;
        }
        .morphs-wrapper {
          align-content: flex-start;
          flex-wrap: wrap;
          display: flex;
          margin-top: 34px;
          gap: 7px;
        }
        .morph-info {
          display: flex;
          gap: 11px;
        }
        .morph-image {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 22px;
          border-radius: 50%;
        }
        .morph-name {
          font-family: "ApocLC", sans-serif;
          margin: auto 0;
        }
        .morph-date {
          font-family: "ApocLC";
          margin: auto 0;
        }
        .divider {
          aspect-ratio: 0;
          object-fit: auto;
          object-position: center;
          width: 1px;
          stroke-width: 1px;
          stroke: rgba(160, 160, 160, 0.51);
          border-color: rgba(160, 160, 160, 0.51);
          border-style: solid;
          border-width: 1px;
          align-self: end;
          margin-top: 45px;
        }
        @media (max-width: 991px) {
          .divider {
            margin-top: 40px;
          }
        }
        .team-no {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .team-no {
            max-width: 100%;
          }
        }
        .morph-info {
          display: flex;
          gap: 10px;
        }
        .morph-image {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 22px;
          border-radius: 50%;
        }
        .morph-name {
          font-family: "ApocLC";
          margin: auto 0;
        }
        .morph-date {
          text-align: center;
          font-family: "ApocLC";
          margin: auto 0;
        }
        .morph-details {
          border-radius: 30px;
          background-color: #212121;
          display: flex;
          gap: 20px;
          justify-content: space-between;
          /* padding: 7px 8px; */
        }
        .morph-info {
          display: flex;
          gap: 10px;
        }
        .morph-image {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 22px;
          border-radius: 50%;
        }
        .morph-name {
          font-family: "ApocLC";
          margin: auto 0;
        }
        .morph-date {
          text-align: center;
          font-family: "ApocLC";
          margin: auto 0;
        }
        .morph-item {
          border-radius: 30px;
          background-color: #212121;
          align-self: start;
          display: flex;
          margin-top: 11px;
          max-height: 35px;
          gap: 20px;
          justify-content: space-between;
          padding: 7px 8px;
        }
        .morph-info {
          display: flex;
          gap: 10px;
        }
        .morph-image {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 22px;
          border-radius: 50%;
        }
        .morph-name {
          font-family: "ApocLC";
          margin: auto 0;
        }
        .morph-date {
          text-align: center;
          font-family: "ApocLC";
          margin: auto 0;
        }
      `}</style>
    </>
  );
}

export default Vote;
