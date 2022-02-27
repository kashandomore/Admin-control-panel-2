import App from "@/App";
import React from "react";
import ReactDOM from "react-dom";
import { TiTick } from "react-icons/ti";
import { BsPencilFill, BsX } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

type Props = {
  name?: string;
};
const EditButton = () => (
  <button className="flex items-center gap-2  text-blue-500">
    <BsPencilFill />
    <p>EDIT</p>
  </button>
);

const ShowButton = () => (
  <button className="flex items-center gap-2 p-2 text-blue-500">
    <AiFillEye />
    <p>SHOW</p>
  </button>
);

const tableData = [
  {
    id: 1,
    Title: "Fusce massa lorem,pulvinar a posuere ut,...",
    Published_at: "01/12/2012",
    Com: <TiTick />,
    Views: "222",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 2,
    Title: "Qui tempore rerun et voluptates",
    Published_at: "07/11/2012",
    Com: <TiTick />,
    Views: "719",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 3,
    Title: "Omnis tempore rerun volupates",
    Published_at: "22/10/2012",
    Com: <TiTick />,
    Views: "294",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 4,
    Title: "Totam vel quasi a odia et nihil",
    Published_at: "19/10/2012",
    Com: <TiTick />,
    Views: "721",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 5,
    Title: "A voluptes elus events ut commodi dolor",
    Published_at: "16/10/2012",
    Com: <TiTick />,
    Views: "143",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 6,
    Title: "Culpa possimus quibusdam nostrum enim tempor...",
    Published_at: "02/10/2012",
    Com: <BsX className="text-xl text-red-600" />,
    Views: "557",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 7,
    Title: "iIIum veritaties corrupti exercitionem sed velit",
    Published_at: "29/10/2012",
    Com: <TiTick />,
    Views: "133",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 8,
    Title: "Minima ea vero omnis odlt officials aut",
    Published_at: "05/10/2012",
    // Com: <TiTick />,
    Views: "208",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 9,
    Title: "Malores et itaque aut perspiciates",
    Published_at: "08/10/2012",
    Com: <BsX className="text-xl text-red-600" />,
    Views: "685",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 10,
    Title: "Slint disnissmos in architecto out ",
    Published_at: "08/10/2012",
    Com: <TiTick />,
    Views: "563",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 11,
    Title: "Perspiciaties adipisci vero qui ipsam iure porro",
    Published_at: "08/10/2012",
    Com: <TiTick />,
    Views: "467",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 12,
    Title: "Accuantiun qui nihil voluptatum quia voluptas m...",
    Published_at: "06/10/2012",
    Com: <TiTick />,
    Views: "143",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 13,
    Title: "Sed quo et et fugait modi",
    Published_at: "05/10/2012",
    Com: <TiTick />,
    Views: "559",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
];
const Table = () => {
  return (
    <div className="w-full p-12">
      <table className="w-full">
        <tbody className=" divide-y divide-black">
          <tr className="text-left">
            <th className="w-[5%]">Id</th>
            <th className="w-[55%]">Title</th>
            <th className="w-[20%]">Published at</th>
            <th className="w-[10%]">Com.</th>
            <th className="w-[10%]">Views</th>
          </tr>
          {tableData.map(
            ({ id, Title, Published_at, Com, Views, Button, button1 }) => (
              <tr key={id}>
                <td className="w-[5%]">{id}</td>
                <td className="w-[70%]">{Title}</td>
                <td className="w-[5%]">{Published_at}</td>
                <td className="w-[10%]">{Com}</td>
                <td className="w-[10%]">{Views}</td>
                <td>{Button}</td>
                <td>{button1}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
