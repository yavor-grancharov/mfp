import React from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/index";

export default () => {
  const history = useHistory();
  const ref = React.useRef(null);

  React.useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPath }) => {
        const { pathname } = history.location;
        if (pathname !== nextPath) {
          history.push(nextPath);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
