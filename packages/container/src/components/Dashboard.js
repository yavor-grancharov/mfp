import React from "react";
import { useHistory } from "react-router-dom";
import { mount } from "dashboard/index";

export default () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
