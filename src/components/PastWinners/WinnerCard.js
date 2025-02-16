// WinnerCard.js
import React from "react";
import "./WinnerCard.css";

import image1 from "../../assets/img/pastwinners/First.webp";
import image2 from "../../assets/img/pastwinners/Second.webp";
import image3 from "../../assets/img/pastwinners/Third.webp";

const WinnerCard = () => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4" id="purple-pink">
        Winners of Hackoverflow 1.0
      </h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="cursor-pointer card">
          <div className="curtain-panel curtain-left card3"></div>
          <div className="curtain-panel curtain-right card3"></div>
          <div className="card-content">
            <div className="card-text">PIXLS</div>
            <img
              src={image3}
              alt="Winner Card"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="cursor-pointer card">
          <div className="curtain-panel curtain-left"></div>
          <div className="curtain-panel curtain-right"></div>
          <div className="card-content">
            <div className="card-text">T3 TRIBE</div>
            <img
              src={image1}
              alt="Winner Card"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="cursor-pointer card">
          <div className="curtain-panel curtain-left card2"></div>
          <div className="curtain-panel curtain-right card2"></div>
          <div className="card-content">
            <div className="card-text">AFKS</div>
            <img
              src={image2}
              alt="Winner Card"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
