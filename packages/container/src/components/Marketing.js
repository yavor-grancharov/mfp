import React from "react";
import { mount } from "marketing/index";

export default () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
