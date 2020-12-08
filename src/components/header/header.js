import React from "react";
import { Logo } from './logo.js'
import { Navbar } from './navbar'
import { SocialIcons } from './socialIcons'

export const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
      <SocialIcons />
    </header>
  );
};

export default Header;
