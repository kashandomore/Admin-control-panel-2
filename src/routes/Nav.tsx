import React, { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import { useLocation } from "react-router-dom";

type Props = {
  menuClick?: () => void;
};

const Nav = ({ menuClick }: Props) => {
  const [pageName, setPageName] = useState<string>("Posts");
  let location = useLocation();
  const displayPageName = () => {
    let name = location.pathname;
    if (name === "/") {
      setPageName("Posts");
    } else {
      let withOutSlash = name.split("/").join("");
      setPageName(withOutSlash);
    }
  };
  useEffect(() => {
    displayPageName();
  }, [location.pathname]);
  return (
    <div className="bg-white p-3 gap-2 flex items-center border-b-2 ">
      <button onClick={menuClick}>
        <BsList className="text-2xl" />
      </button>

      <h3>{pageName}</h3>
    </div>
  );
};

export default Nav;
