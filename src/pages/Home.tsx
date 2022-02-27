import React from "react";
import logo from "@/assets/img/logo.svg";
import Table from "@/components/Table";

type Props = {
  name?: string;
};

const Home = ({ name }: Props) => (
  <div>
    <Table />
  </div>
);
export default Home;
