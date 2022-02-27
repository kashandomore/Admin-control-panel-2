import React from "react";
import Navbar from "../routes/Nav";
import Nav from "../routes/Nav";

type Props = {
  menuClick?: () => void;
};

const Header = ({ menuClick }: Props) => (
  <div>
    <Nav menuClick={menuClick} />
  </div>
);

export default Header;
