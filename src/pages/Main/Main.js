import React from "react";
import "./Main.scss";
import Feed from "./Feed";

function Main() {
  return (
    <div className="main">
      <div className="header-wrapper">
        <div className="vertical-center">
          <img
            className="icon-img"
            src="images/instagram.png"
            alt="camera-icon"
          />
          <span className="logo-text">| Justgram</span>
        </div>
        <input
          className="search vertical-center"
          type="text"
          placeholder="검색"
        ></input>
        <div className="vertical-center">
          <img
            className="icon-img"
            alt="나침반"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            className="icon-img custom-margin-left"
            alt="하트"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            className="icon-img custom-margin-left"
            alt="사람"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </div>
      <div className="flex-center">
        <div className="contents-wrapper"></div>
        <Feed />
      </div>
    </div>
  );
}

export default Main;
