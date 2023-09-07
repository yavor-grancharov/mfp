import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

/**
 * Mount function to start up the app
 * @param {*} htmlEl
 */

const mount = (htmlEl) => {
  const app = createApp(Dashboard);
  app.mount(htmlEl);
};

/**
 * If development and isolation mount immediately
 */
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#dashboard-root");

  if (root) {
    mount(root);
  }
}

/**
 * If we are running through container export mount
 */

export { mount };
