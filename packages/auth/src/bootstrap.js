import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

/**
 * Mount function to start up the app
 * @param {*} htmlEl
 */

const mount = (
  htmlEl,
  { onSignin, onNavigate, defaultHistory, initialPath }
) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignin={onSignin} />, htmlEl);

  return {
    onParentNavigate({ pathname: nextPath }) {
      const { pathname } = history.location;
      if (pathname !== nextPath) {
        history.push(nextPath);
      }
    },
  };
};

/**
 * If development and isolation mount immediately
 */
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#auth-root");

  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() });
  }
}

/**
 * If we are running through container export mount
 */

export { mount };
