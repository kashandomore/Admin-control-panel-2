import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";

type Props = {
  name?: string;
};
const EditButton = () => (
  <button className="flex items-center gap-2 text-blue-500 hover:bg-slate-100 hover:rounded-lg p-1 duration-200">
    <BsPencilFill />
    EDIT
  </button>
);

const Tags = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const handleFilterOpening1 = () => {
    setIsOpen1((isOpen1) => !isOpen1);
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const handleFilterOpening2 = () => {
    setIsOpen2((isOpen2) => !isOpen2);
  };
  const [isOpen3, setIsOpen3] = useState(false);
  const handleFilterOpening3 = () => {
    setIsOpen3((isOpen3) => !isOpen3);
  };
  const [isOpen4, setIsOpen4] = useState(false);
  const handleFilterOpening4 = () => {
    setIsOpen4((isOpen4) => !isOpen4);
  };
  const [isOpen5, setIsOpen5] = useState(false);
  const handleFilterOpening5 = () => {
    setIsOpen5((isOpen5) => !isOpen5);
  };
  return (
    <div className="p-12">
      <div className="bg-white w-96 p-4">
        {/*  */}
        <div className="flex justify-between hover:bg-slate-200 p-1 rounded-md">
          <div className="flex text-xl items-center">
            <button onClick={handleFilterOpening1}>Sport</button>
            {!isOpen1 ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </div>
          <div>
            <EditButton />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen1 && <div className="p-3">Parkour</div>}
            {isOpen1 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen1 && <div className="p-3">Crossfit</div>}
            {isOpen1 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between hover:bg-slate-200 p-1 rounded-md">
          <div className="flex text-xl items-center ">
            <button onClick={handleFilterOpening2}>Technology</button>
            {!isOpen2 ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </div>
          <div>
            <EditButton />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen2 && <div className="p-3">Computing</div>}
            {isOpen2 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen2 && <div className="p-3">Nanoscience</div>}
            {isOpen2 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen2 && <div className="p-3">Blockchain</div>}
            {isOpen2 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between hover:bg-slate-200 p-1 rounded-md">
          <div className="flex text-xl items-center">
            <button onClick={handleFilterOpening3}>Code</button>
            {!isOpen3 ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </div>
          <div>
            <EditButton />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen3 && <div className="p-3">Node</div>}
            {isOpen3 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen3 && <div className="p-3">React</div>}
            {isOpen3 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between hover:bg-slate-200 p-1 rounded-md">
          <div className="flex text-xl items-center">
            <button onClick={handleFilterOpening4}>Photo</button>
            {!isOpen4 ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </div>
          <div>
            <EditButton />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen4 && <div className="p-3">Nature</div>}
            {isOpen4 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen4 && <div className="p-3">People</div>}
            {isOpen4 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between hover:bg-slate-200 p-1 rounded-md">
          <div className="flex text-xl items-center">
            <button onClick={handleFilterOpening5}>Music</button>
            {!isOpen5 ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </div>
          <div>
            <EditButton />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen5 && <div className="p-3">Rap</div>}
            {isOpen5 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen5 && <div className="p-3">Rock</div>}
            {isOpen5 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
          <div className="flex justify-between items-center hover:bg-slate-100">
            {isOpen5 && <div className="p-3">World</div>}
            {isOpen5 && (
              <div>
                <EditButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tags;
