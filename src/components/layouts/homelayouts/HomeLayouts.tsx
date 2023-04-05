import React from "react";
import { Footer, Header } from "../../blocks";
import { Outlet } from "react-router-dom";

const HomeLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayouts;
