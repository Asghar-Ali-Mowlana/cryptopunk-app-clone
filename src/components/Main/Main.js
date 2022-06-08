import React, { useState, useEffect } from "react";
import "./Main.css";
import instagramLogo from "../../assets/owner/instagram.png";
import twitterLogo from "../../assets/owner/twitter.png";
import moreIcon from "../../assets/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={activePunk.image_original_url}
              className="selectedPunk"
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={activePunk.owner.profile_img_url}
                className="selectedPunk"
                alt=""
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandle">alimowlana24@gmail.com</div>
              </div>
              <div className="ownerlink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerlink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerlink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /*<div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={activePunk.image_original_url}
              className="selectedPunk"
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={activePunk.owner.profile_img_url}
                className="selectedPunk"
                alt=""
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandle">alimowlana24@gmail.com</div>
              </div>
              <div className="ownerlink">
                <img
                  src={require("../assets/owner/instagram.png").default}
                  alt=""
                />
              </div>
              <div className="ownerlink">
                <img
                  src={require("../assets/owner/twitter.png").default}
                  alt=""
                />
              </div>
              <div className="ownerlink">
                <img src={require("../assets/owner/more.png").default} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>*/
  );
};

export default Main;
