import React from "react";
import { BsLinkedin, BsTelegram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/AbdulRahman-Sharief">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/abdulrahman-sharief-29a8151a9/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://t.me/AbdulRahmanSharief">
          <BsTelegram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
