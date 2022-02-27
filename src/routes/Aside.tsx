import React from "react";
import { BsFillFilePostFill } from "react-icons/bs";
import { MdModeComment } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
455;
type Props = {
  isVisible?: boolean;
};

const Aside = ({ isVisible }: Props) => {
  return (
    <div
      className={`bg-white min-h-screen w-72 p-6 absolute lg:relative ${
        isVisible ? "block" : "hidden"
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
            <MdModeComment />
            <Link to="/Comments">Comments</Link>
          </li>
        </div>
        <div className="text-xl hover:bg-slate-200 active:bg-slate-400 p-2 rounded-lg">
          <li className="flex gap-2 items-center">
            <FaList />
            <Link to="/Tags">Tags</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Aside;
