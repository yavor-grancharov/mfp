import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/**
 * Mount function to start up the app
 * @param {*} htmlEl
 */

const mount = (htmlEl) => {
  ReactDOM.render(<App />, htmlEl);
};

/**
 * If development and isolation mount immediately
 */
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#marketing-root");

  if (root) {
    mount(root);
  }
}

/**
 * If we are running through container export mount
 */

export { mount };
