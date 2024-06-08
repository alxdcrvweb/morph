import Link from "next/link";

function VoteRow() {
  return (
    <>
      <Link href={`/vote/` + "1"}>
        <div className="container">
          <div className="profileSection">
            <img loading="lazy" srcSet="..." className="profileImage" />
            <div className="profileName">pifours.eth</div>
            <div className="question">| Should we enable OS rarity?</div>
          </div>
          <div className="statusSection">
            <div className="date">06/06</div>
            <img src="../green.svg" />
            <div className="status">ongoing </div>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .container {
          border-radius: 30px;
          background-color: #212121;
          display: flex;
          max-width: 573px;
          gap: 20px;
          font-size: 12px;
          font-weight: 400;
          cursor: pointer;
          letter-spacing: 0.72px;
          line-height: 150%;
          justify-content: space-between;
          padding: 7px 18px 7px 6px;
        }
        @media (max-width: 991px) {
          .container {
            flex-wrap: wrap;
          }
        }
        .profileSection {
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .profileImage {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 22px;
          border-radius: 50%;
          align-self: stretch;
        }
        .profileName {
          color: #ec9e9e;
          font-family: "ApocLC", sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .question {
          color: #fff;
          font-family: "ApocLC", sans-serif;
          align-self: stretch;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .statusSection {
          display: flex;
          gap: 20px;
          color: #fff;
          text-align: center;
          justify-content: space-between;
          margin: auto 0;
        }
        .date {
          font-family: "ApocLC", sans-serif;
        }
        .status {
          font-family: "ApocLC", sans-serif;
        }
      `}</style>
    </>
  );
}
export default VoteRow;
