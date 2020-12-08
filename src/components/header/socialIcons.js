import React from "react";
import { Github, Linkedin, DevDotTo } from '@icons-pack/react-simple-icons'

export const SocialIcons = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="#">
            <DevDotTo color="#181717" /> 
          </a>
        </li>
        <li>
          <a href="#">
            <Linkedin color="#181717" /> 
          </a>
        </li>
        <li>
          <a href="#">
            <Github color="#181717" /> 
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
