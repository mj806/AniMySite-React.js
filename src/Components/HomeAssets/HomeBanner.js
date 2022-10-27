import React from "react";
import Marquee from "react-fast-marquee";

function HomeBanner() {
  return (
    <div>
      <div className="HBanner">
        <ul className="BannerPics">
          <li>
            <img src="https://i.pinimg.com/736x/63/cf/25/63cf25eaeb581d8787cd5c3bfaf899d1--goku-pictures-dragon-ball.jpg" />
          </li>
          <li>
            <img src="https://cdn50.picsart.com/168344079000202.png?r1024x1024" />
          </li>
          <li>
            <img src="https://i.pinimg.com/736x/25/6f/21/256f2143dc1c7476dd2e064b62862f49--cowboy-bebop-iphone-wallpaper.jpg" />
          </li>
          <li>
            <img src="https://i.pinimg.com/736x/b7/9f/67/b79f673c1064ecc4c8cd08272fbe671d.jpg" />
          </li>
        </ul>
        <Marquee
          gradient={false}
          direction="right"
          speed={200}
          className="marq"
        >
          <h1>RECOMMENDATIONS!</h1>
        </Marquee>
      </div>
    </div>
  );
}

export default HomeBanner;
