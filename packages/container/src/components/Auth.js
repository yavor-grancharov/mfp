import React from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/index";

export default ({ onSignin }) => {
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
      onSignin,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
