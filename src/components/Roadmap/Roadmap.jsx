import React from "react";
import heart from "../../assets/images/heart.svg";
import creation from "../../assets/images/creation.svg";
import benefits from "../../assets/images/benefits.svg";
import begining from "../../assets/images/beginning.svg";
import "./Roadmap.scss";

const Roadmap = () => {
  return (
    <section className="roadmap container">
      <h2 className="roadmap-title title">Launch roadmap</h2>
      <div className="roadmap-subtitle">
        As we value our community and its creativity, <br /> our roadmap will be
        updated according to your <br /> comments and ideas.
      </div>
      <div className="roadmap-info">
        <div className="roadmap-info__chain">
          <div className="chain-step">1</div>
          <div className="chain-link"></div>
          <div className="chain-step">2</div>
          <div className="chain-link"></div>
          <div className="chain-step">3</div>
          <div className="chain-link"></div>
          <div className="chain-step">4</div>
        </div>
        <div className="roadmap-info__steps">
          <div className="roadmap-step">
            <div className="roadmap-step__image">
              <img src={creation} alt="" />
            </div>
            <div className="roadmap-step__info">
              <h4>ARTISTIC DOMINANCE</h4>
              <p>
                EACH OF THE 5000 EXCEPTIONAL PIECES OF NFT ART WILL BE PRODUCED
                WITH THE SAME EXPERTISE AND QUALITY REQUIRED OF A BLOCKBUSTER
                FILM. FROM EVERY BODY PART TO EVERY DETAIL, EACH SUPREME KONG
                WILL BE ENTIRELY UNIQUE AND ADMIRED BY THE PEOPLE OF THE
                METAVERSE. ALL ART WILL BE COMPLETED AND READY TO BE UNLEASHED
                BY MID FEBRUARY 022.
              </p>
            </div>
          </div>
          <div className="roadmap-step">
            <div className="roadmap-step__image">
              <img src={begining} alt="" />
            </div>
            <div className="roadmap-step__info">
              <h4>SUPREME KONG IS INTRODUCED INTO THE METAVERSE</h4>
              <p>
                BY NOW IT'S TOO LATE — THE CAGE HAS BEEN OPENED AND THE
                METAVERSE WILL NEVER BE THE SAME. UNFORTUNATELY FOR THE PEOPLE,
                ONLY 5000 INVESTORS WILL BE ABLE TO CLAIM THEIR VERY OWN SUPREME
                KONG. SUPREME KONG OWNERS WILL HAVE EXCLUSIVE BENEFITS,
                INCLUDING UNRESTRICTED ACCESS TO SPECIAL LIVE EVENTS AROUND THE
                GLOBE.
              </p>
            </div>
          </div>
          <div className="roadmap-step">
            <div className="roadmap-step__image">
              <img src={benefits} alt="" />
            </div>
            <div className="roadmap-step__info">
              <h4>GIVING BACK FOR THE SUPREME GOOD OF THE KINGDOM</h4>
              <p>
                AS ONE KONG ONCE SAID, "APES TOGETHER STRONG", AND THAT'S WHY WE
                WANT TO GIVE BACK TO THE REAL APES OF THE WORLD. IN STAGE 3, WE
                PLEDGE TO DONATE $25,000 TO APE CHARITY. WE WANT TO CREATE A
                POSITIVE IMPACT IN THE REAL WORLD. TOGETHER, WE APES WILL
                PROTECT OUR FELLOW APES.
              </p>
            </div>
          </div>
          <div className="roadmap-step">
            <div className="roadmap-step__image">
              <img src={heart} alt="" />
            </div>
            <div className="roadmap-step__info">
              <h4>INTRODUCTION OF THE ALPHAS</h4>
              <p>
                EVEN AMONGST THE STRONGEST, THERE ARE THE ALPHAS — THOSE RARE
                INDIVIDUALS WHO CLAIM RESPECT FROM THE RESPECTED. IN STAGE 4, WE
                WILL INTRODUCE 1/1 TRUE ALPHAS. UNCHAINED BY THE USUAL
                RESTRAINTS OF THE ENGINEERING PROCESS, OUR ARTIST WILL HAVE FREE
                REIN TO RUN WILD AND CREATE THE MOST UNIQUELY SAVAGE AND
                POWERFUL APES THE METAVERSE WILL EVER KNOW..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
