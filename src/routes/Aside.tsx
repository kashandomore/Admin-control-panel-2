import React from "react";
import { BsFillFilePostFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { Link } from "react-router-dom";
455;
type Props = {
  isVisible?: boolean;
};

const Aside = ({ isVisible }: Props) => {
  return (
    <div
      className={`bg-white min-h-screen duration-500 w-72 p-6 absolute lg:relative ${
        isVisible ? "-ml-72" : "-ml-0"
      }`}
    >
      <ul>
        <div className="text-xl hover:bg-slate-200 active:bg-slate-400 p-2 rounded-lg">
          <li className="flex gap-2 items-center">
            <BsFillFilePostFill />
            <Link to="/">Posts</Link>
          </li>
        </div>
        <div className=" text-xl hover:bg-slate-200 active:bg-slate-400 p-2 rounded-lg">
          <li className="flex gap-2 items-center">
            <FaCommentAlt />
            <Link to="/Comments">Comments</Link>
          </li>
        </div>
        <div className="text-xl hover:bg-slate-200 active:bg-slate-400 p-2 rounded-lg">
          <li className="flex gap-2 items-center">
            <ImPriceTags />
            <Link to="/Tags">Tags</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Aside;
