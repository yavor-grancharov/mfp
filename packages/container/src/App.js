import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

import Marketing from "./components/Marketing";

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Marketing />
    </BrowserRouter>
  );
};
