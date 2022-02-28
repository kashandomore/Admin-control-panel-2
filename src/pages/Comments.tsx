import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { ImUser } from "react-icons/im";

type Props = {
  name?: string;
};
const EditButton = () => (
  <button className="flex items-center gap-2  text-blue-500 hover:bg-slate-100 hover:rounded-lg p-1 duration-200">
    <BsPencilFill />
    <p>EDIT</p>
  </button>
);
const ShowButton = () => (
  <button className="flex items-center gap-2 text-blue-500 hover:bg-slate-100 hover:rounded-lg p-1 duration-200">
    <AiFillEye />
    <p>SHOW</p>
  </button>
);

const dataList = [
  {
    id: 1,
    icon: <ImUser />,
    name: "Alex mani",
    date: "02/08/2012",
    title:
      "Queen, tossing her head through the wood. 'If it had lost something; and she felt sure it.",
    about: "About Minima ea vero omnis idit officiis aut",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 2,
    icon: <ImUser />,
    name: "Kiley Pouros",
    date: "02/08/2012",
    title:
      "Queen, tossing her head through the wood. 'If it White Rabbit: it was indeed: she was out of the ground--and I should frighten them out of its right paw round, 'lives a March Hare. 'Sixteenth,'.had lost something; and she felt sure it.",
    about: "About A voluptas eius eveniet ut commodi dolor",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 3,
    icon: <ImUser />,
    name: "Justina Hegmann",
    date: "02/08/2012",
    title: "I'm not Ada,' she said, 'and see whether it's marked 'poison' or.",
    about: "About Perpiciatis adipisci vero qui ipsma iure porro",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 4,
    icon: <ImUser />,
    name: "Ms. Brionna Smitham MD",
    date: "02/08/2012",
    title:
      "Queen, tossing her head through the wood. 'If it had lost something; and she felt sure it.",
    about: "About Minima ea vero omnis idit officiis aut",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 5,
    icon: <ImUser />,
    name: "Edmond Schulist",
    date: "02/08/2012",
    title:
      "Dormouse. 'Fourteenth of March, I think I can say.' This was such a noise inside, no one else seemed inclined.",
    about: "About Minima ea vero omnis idit officiis aut",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
  {
    id: 6,
    icon: <ImUser />,
    name: "Danny Greenholt",
    date: "02/08/2012",
    title:
      "I ought to tell me your history, you know,' the Hatter and the happy summer days. THE.",
    about: "About Accusntium qui nihil voluptatas maxime ab similique",
    Button: <EditButton />,
    button1: <ShowButton />,
  },
];
const Comments = () => (
  <div className="p-8 grid gap-8 lg:grid-cols-2 sm:grid-cols-1">
    {dataList.map(({ id, icon, name, date, title, about, Button, button1 }) => (
      <div key={id} className="bg-white shadow-xl p-8">
        <div className="flex items-center">
          <h3 className="bg-gray-400 text-white rounded-full p-2">{icon}</h3>
          <div>
            <p className="text-gray-500 ml-2">{name}</p>
            <p className="text-gray-500 ml-2">{date}</p>
          </div>
        </div>
        <p className="mt-8">{title}</p>
        <p className="mt-4">{about}</p>
        <div className="flex justify-end mt-10">
          <h6>{Button}</h6>
          <h6>{button1}</h6>
        </div>
      </div>
    ))}
  </div>
);
export default Comments;
