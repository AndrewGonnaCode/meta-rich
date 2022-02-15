import React from "react";
import "./Story.scss";
import storyImage from "../../assets/images/story.png";

const Story = () => {
  return (
    <section className="story container">
      <h2 className="story-title title">
        UNQUESTIONED <br /> DOMINANCE FINALLY <br /> UNLEASHED
      </h2>
      <div className="story-info">
        <div className="story-info__image">
          <img src={storyImage} alt="" />
        </div>
        <div className="story-info__texts">
          <p>
            The cage of reality has been shaken to the ground, and the
            blockchain struggles to contain its power. Supreme Kong has been
            unleashed and is ready to dominate the Metaverse.
          </p>
          <p>
            The Supreme Leader of the Metaverse Kingdom — Supreme Kong. Supreme
            Kong is an NFT series as limited as it is powerful, only 5000
            Supreme Kongs shall be minted. A primal, unstoppable force that
            cannot be tamed, Supreme Kong is impossible to be replicated or
            destroyed. Supreme Kong dominates the Metaverse in any domain,
            thanks to its fully imagined, unrestrained 3D form. Whether it be in
            movies, games, or real-time Metaverse meet-ups, your authority and
            influence will not be challenged.Now is the time for you to evolve
            into your most savage, furious form. Now is the reign of Supreme
            Kong.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
