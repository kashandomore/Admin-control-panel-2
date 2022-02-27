import { BrowserRouter } from "react-router-dom";

import HomeRoutes from "@/routes/HomeRoutes";
import Header from "@/components/Header";
import Aside from "./routes/Aside";
import { useState } from "react";

export default function App() {
  let [sideMenu, setSideMenu] = useState<boolean>(false);

  const Sidebar = () => {
    setSideMenu((sideMenu = !sideMenu));
  };

  return (
    <BrowserRouter>
      <Header menuClick={Sidebar} />
      <div className="flex">
        <Aside isVisible={sideMenu} />
        <HomeRoutes />
      </div>
    </BrowserRouter>
  );
}
